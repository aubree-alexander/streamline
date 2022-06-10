//responsible for rendering handebars templates.

const router = require('express').Router();
const { route } = require('express/lib/application');
const { User, MovieShow } = require('../models/');

// get all movies or shows for homepage carousel
router.get('/', async (req, res) => {
  try {
    const movieShowData = await MovieShow.findAll({
      // include: [User],
    });
    console.log(movieShowData);

    const movieShows = movieShowData.map((movieShows) => movieShows.get({ plain: true }));

    res.render('homepage', { movieShows });
  } catch (err) {
    res.status(500).json(err);
  }
});


//NAV BAR ROUTES

//send user to advancedSearch handlebars template when clicking nav button
router.get('/search', (req, res) => {
  res.render('advancedSearch');
});

//send user to userEntry handlebars template when clicking nav button
router.get('/add-entry', (req, res) => {
  res.render('userEntry');
});

//send user to homepage when clicking cloudinary main text in nav bar or logo
router.get('/homepage', (req, res) => {
  res.render('homepage');
});

// //send user to homepage when clicking cloudinary main text in nav bar or logo
router.get('/my-entries', (req, res) => {
  res.render('loginPage');
});

//send user to login page when they click nav bar item
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/homepage')
    return;
  }
  res.render('loginPage');
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
  res.render('accountCreation');
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
