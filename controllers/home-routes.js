//responsible for rendering handebars templates.

const router = require('express').Router();
const { route } = require('express/lib/application');
const { User, MovieShow, StreamingService } = require('../models/');
console.log(StreamingService)
// get all movies or shows for homepage carousel
router.get('/homepage', async (req, res) => {
   
    // const movieShowData = await 
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
    
    // console.log(movieShowData);


    console.log('this is the new console log', movieShows)
  }).catch(err => {
    res.status(500).json(err);
})
})


//NAV BAR ROUTES

//send user to advancedSearch handlebars template when clicking nav button
router.get('/search', (req, res) => {
  res.render('advancedSearch', {loggedIn: req.session.loggedIn});
});

//send user to userEntry handlebars template when clicking nav button
router.get('/add-entry', (req, res) => {
  res.render('userEntry',{loggedIn: req.session.loggedIn});
});

//send user to homepage when clicking cloudinary main text in nav bar or logo
router.get('/homepage', (req, res) => {
  res.render('homepage',{loggedIn: req.session.loggedIn});
});

// //send user to homepage when clicking cloudinary main text in nav bar or logo
// router.get('/my-entries', (req, res) => {
//   res.render('loginPage');
// });

//send user to login page when they click nav bar item
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/homepage')
    return;
  }
  res.render('loginPage', {loggedIn: req.session.loggedIn});
});

// MAIN PAGE ROUTES - AA - need to figure out how to add anchor tag to buttons before i implement this.

//send user to advancedSearch handlebars template when clicking search on main page
// router.get('/search', (req, res) => {
//   res.render('advancedSearch');
// });

// //send user to userEntry handlebars template when clicking new entry button on homepage
// router.get('/add-entry', (req, res) => {
//   res.render('/userEntry');
// });

//LOGIN PAGE ROUTES
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }
  res.render('accountCreation',{loggedIn: req.session.loggedIn});
});


//SEARCH RESULTS ROUTES
router.get('/searchResults', async (req, res) => {
  try {
    const movieShowData = await MovieShow.findAll({

    });
    console.log(movieShowData);

    const movieShows = movieShowData.map((movieShows) => movieShows.get({ plain: true }));

    res.render('searchResults', { movieShows });
  } catch (err) {
    res.status(500).json(err);
  }
});




//AA - we need to figure out how to incorporate data from search form to filter results based on what the user searches for.
// get single movie or show
// router.get('/post/:id', async (req, res) => {
//   try {
//     const movieShowData = await Post.findByPk(req.params.id, {
//       include: [
//         User,
//         {
//           model: Comment,
//           include: [User],
//         },
//       ],
//     });

//     if (movieShowData) {
//       const post = movieShowData.get({ plain: true });

//       res.render('single-post', { post });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// router.get('/signup', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('signup');
// });

module.exports = router;
