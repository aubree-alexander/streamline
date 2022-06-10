const advancedSearch = async function(event) {
    event.preventDefault();

    const streamingservice_id = document.querySelector('#advSearchStr').value

    const genre = document.querySelector('#advSearchGenMov').value

    const rating = document.querySelector('#advSearchRat').value

    const yearReleased = parseInt($('#datepicker').val())

    await 
    fetch('/api/movieshows/search', { 
        method: 'POST',
        //AA - ask josh if this is the appropriate method for this! is it a get? could be a post. want to make sure we're passing data back correctly.
        body: JSON.stringify({
            streamingservice_id, genre, rating, yearReleased
        }), 
        headers: {
            //data that we're grabbing from form that we're holding in teh body - sending back as json object.
            'Content-Type': 'application/json'
        }

        .then(
            document.location.replace('/searchResults')
        )

    })


    document.location.replace('/advancedSearch')
};


document.querySelector('#searchForm').addEventListener('submit', advancedSearch);