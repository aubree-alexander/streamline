const router = require('express').Router();
const { MovieShow, StreamingService, User } = require('../../models/index.js');
const withAuth = require('../../utils/auth');
//import model querying from sequelize
const { Op } = require("sequelize");

//AA - need to put withAuth back in these once complete.

// Raj advice===what you could try if you want to put withAuth back in is put it back in to the post route and then hit the login route first with a valid username and password in the JSON and then try hitting the post route
router.post('/', (req, res) => {

    MovieShow.create({
      title: req.body.title,
      yearReleased: req.body.yearReleased,
    //   user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Get all posts
router.get("/homepage", async (req, res) => {
  MovieShow.findAll({
      attributes: ["id", "title", "yearReleased", "image_url",],
      include: [{
              model: StreamingService,
              attributes: ["id"],
          },
      ],
    })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


//get user input data from search form
router.post('/search', async (req, res) => {
  try {
    const { title, yearReleased, streamingservice_id, genre, rating } = req.body
    const orArray = []
    if (title) {
      //in this movie title, find all space characters, replace pluses with spaces.
      orArray.push( { title: title.replace(/\+/g, ' ') })
    }
    //2 !! means - does it exist and is a truthy value (not an empty string?)
    //also called BANG
    if (!!title) {
      orArray.push({ title })
    }
    if (!!yearReleased) {
      orArray.push({ yearReleased })
    }
    if (!!streamingservice_id) {
      orArray.push({ streamingservice_id })
    }
    if (!!genre) {
      orArray.push({ genre })
    }
    if (!!rating) {
      orArray.push({ rating })
    }
    console.log(orArray)
    const results = await MovieShow.findAll({
      where: { [Op.or]: orArray },
      include: [
        {
          model: StreamingService,
          attributes: ['name']
        }
      ]
    })
    // console.log(results)
    res.json(results)
    // res.render('searchResults')
  } catch(err) {
    res.status(500).json(err)
    }
});


//AA - this is a feature
//update existing movie or show
// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     const [affectedRows] = await MovieShow.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (affectedRows > 0) {
//       res.status(200).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
