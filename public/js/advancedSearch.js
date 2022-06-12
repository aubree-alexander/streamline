// const { MovieShow } = require("../../models");
const resultsDiv = document.getElementById('results')

const advancedSearch = async function(event) {
    event.preventDefault();

    const title = document.querySelector('#movieTitle').value

    const streamingservice_id = document.querySelector('#advSearchStr').value

    const genre = document.querySelector('#advSearchGenMov').value

    const rating = document.querySelector('#advSearchRat').value

    const yearReleased = parseInt($('#datepicker').val())

   


    fetch('/api/movieshows/search', { 
        method: 'POST',
        body: JSON.stringify({
            title, streamingservice_id, genre, rating, yearReleased 
        }), 
        headers: {
            //data that we're grabbing from form that we're holding in the body - sending back as json object.
            'Content-Type': 'application/json'
        }
        



    }).then(response => response.json())
    .then(searchResults => {
        resultsDiv.innerHTML = ''

        searchResults.forEach(movieShow => {
            //AA - how to insert image url from database here? not from form
        resultsDiv.innerHTML += `<div class="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="` + title + `">
                <div class="card-body">
                    <p class="card-text">` + yearReleased + `</p>
                    <p class="card-text">` + genre + `</p>
                </div>
            </div>`
        })
    })
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