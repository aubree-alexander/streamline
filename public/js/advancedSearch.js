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
            'Content-Type': 'application/json'
        }
        
    }).then(response => response.json())
    .then(searchResults => {
        resultsDiv.innerHTML = ''

        searchResults.forEach(movieShow => {

        resultsDiv.innerHTML += `<div class="card" style="width: 18rem;">
                <img src="${movieShow.image_url}" class="card-img-top" alt=" ">
                <div class="card-body">
                    <p class="card-text">${movieShow.title}</p>
                    <p class="card-text">${movieShow.yearReleased}</p>
                    <p class="card-text">genre: ${movieShow.genre}</p>
                    <p class="card-text">rating: ${movieShow.rating} stars</p>
                   
                </div>
            </div>`
        })
    })
};
{/* <p class="card-text">${movieShow.StreamingService.name}</p> */}

document.querySelector('#searchForm').addEventListener('submit', advancedSearch);