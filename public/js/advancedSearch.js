// const { MovieShow } = require("../../models");

const advancedSearch = async function(event) {
    event.preventDefault();

    const streamingservice_id = document.querySelector('#advSearchStr').value

    const genre = document.querySelector('#advSearchGenMov').value

    const rating = document.querySelector('#advSearchRat').value

    const yearReleased = parseInt($('#datepicker').val())

    await fetch('/api/movieshows/search', { 
        method: 'POST',
        body: JSON.stringify({
            streamingservice_id, genre, rating, yearReleased
        }), 
        headers: {
            //data that we're grabbing from form that we're holding in the body - sending back as json object.
            'Content-Type': 'application/json'
        }
        

      
   //AA - unsure of what to do here.

    })
    
        document.location.replace('/searchResults')
    
};

//AA - for reference, this is the router.get for the homepage that w
// router.get('/homepage', async (req, res) => {
//     try {
//       const movieShowData = await MovieShow.findAll({
  
//       });
//       console.log(movieShowData);
  
//       const movieShows = movieShowData.map((movieShows) => movieShows.get({ plain: true }));
  
//       res.render('homepage', { movieShows });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


document.querySelector('#searchForm').addEventListener('submit', advancedSearch);