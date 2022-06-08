const router = require('express').Router();
const { User, MovieShow } = require('../models/');

// get all movies or shows for homepage
// AA - commenting out for now as I'm not sure how we want to display all of these from the get go on the homepage.
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
