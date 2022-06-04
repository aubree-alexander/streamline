const router = require('express').Router();
const { MovieShow } = require('../../models/');
const withAuth = require('../../utils/auth');

//post new movie or show
//AA - we need to link data from new post form here
router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newMovieShow = await MovieShow.create({ ...body, userId: req.session.userId });
    res.json(newMovieShow);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update existing movie or show
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await MovieShow.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//AA - keeping this here in case we want to let people delete posts.
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const [affectedRows] = MovieShow.destroy({
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
