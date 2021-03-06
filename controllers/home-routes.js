//responsible for rendering handebars templates.
const router = require('express').Router();
const { route } = require('express/lib/application');
const { User, MovieShow, StreamingService } = require('../models/');
const withAuth = require('../utils/auth')


// get all movies or shows for homepage carousel
router.get('/', async (req, res) => {
    MovieShow.findAll({

      attributes: [
        'id', 'title', 'yearReleased', 'streamingservice_id', 'image_url', 'genre', 'rating'
      ],
      include: [
        {
          model: StreamingService, 
          attributes: ['name']
        }
      ]
    }).then(data => {
      const movieShows = data.map((movieShows) => movieShows.get({ plain: true }));
      res.render('homepage', { movieShows });
    
  }).catch(err => {
    res.status(500).json(err);
})
})


//NAV BAR ROUTES

//send user to advancedSearch handlebars template when clicking nav button
router.get('/search', (req, res) => {
  res.render('advancedSearch', {loggedIn: req.session.loggedIn});
});

//AA- tried adding withAuth here. works while logged out (redirects to login page) but not when user is logged in. makes me wonder if the logged in functionality is working.
//send user to userEntry handlebars template when clicking nav button
router.get('/add-entry', (req, res) => {
  res.render('userEntry',{loggedIn: req.session.loggedIn});
});

//send user to homepage when clicking cloudinary main text in nav bar or logo
router.get('/', (req, res) => {
  res.render('homepage',{loggedIn: req.session.loggedIn});
});


//LOGIN ROUTES
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
    return;
  }
  res.render('loginPage', {loggedIn: req.session.loggedIn});
});


router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('accountCreation',{loggedIn: req.session.loggedIn});
});


//SEARCH RESULTS ROUTES
router.get('/searchResults', async (req, res) => {
  try {
    const movieShowData = await MovieShow.findAll({

    });
    // console.log(movieShowData);

    const movieShows = movieShowData.map((movieShows) => movieShows.get({ plain: true }));

    res.render('searchResults', { movieShows });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
