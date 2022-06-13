const router = require('express').Router();
const { User, MovieShow, StreamingService } = require('../../models');
const withAuth = require('../../utils/auth')

// get all users   ***THIS ROUTE WORKS IN INSOMNIA sam***
router.get('/', withAuth, (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ***THIS ROUTE WORKS WITHOUT inlude: IN INSOMNIA***
router.get('/:id', withAuth, (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    // include: [
      // {
      //   model: MovieShow,
      //   attributes: ['id', 'title', 'yearReleased', 'created_at']
      // },
    //   {
    //     model: StreamingService,
    //     attributes: ['id', 'name', 'created_at'],
    //     include: {
    //       model: MovieShow,
    //       attributes: ['title']
    //     }
    //   },
    // ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
 
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
 
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      // 
      res.redirect('/')
    });
  });
});


router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      // res.status(204).end();
      res.redirect('/')
    });
  }
  else {
    res.status(404).end();
  }
});


module.exports = router;

