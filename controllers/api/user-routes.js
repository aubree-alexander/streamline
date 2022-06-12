const router = require('express').Router();
const { User, MovieShow, StreamingService } = require('../../models');

// get all users   ***THIS ROUTE WORKS IN INSOMNIA sam***
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// ***THIS ROUTE DOES NOT WORK IN INSOMNIA AT ALL sam***
// ***THIS ROUTE WORKS WITHOUT inlude: IN INSOMNIA***
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    // include: [
    //   {
    //     model: MovieShow,
    //     attributes: ['id', 'title', 'yearReleased', 'created_at']
    //   },
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


// (***THIS ROUTE GIVES A SEQUELIZE VALIDATION ERROR IN INSOMNIA sam***)
// ****THIS ROUTE WORKS NOW...CHANGED PWD LENGTH (len) IN USER MODELS to [8,15] sam****
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


// ***THIS ROUTE GIVE A 400 BAD REQUEST ERROR (NO USERNAME) IN INSOMNIA sam***
// ***OK WEIRD...THIS ROUTE WORKS ON NEWLY CREATED LOGINS, NOT SEEDED DATA sam***
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
  
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});


router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});


module.exports = router;

