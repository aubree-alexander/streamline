const advancedSearch = async function(event) {
    event.preventDefault();

    const streamingservice_id = document.querySelector('#advSearchStr').value

    const genre = document.querySelector('#advSearchGenMov').value

    const rating = document.querySelector('#advSearchRat').value

    const yearReleased = parseInt($('#datepicker').val())

    await 
    fetch('/api/movieshows/search', { 
        method: 'GET',
        //AA - ask josh if this is the appropriate method for this! is it a get? could be a post. want to make sure we're passing data back correctly.
        body: JSON.stringify({
            streamingservice_id, genre, rating, yearReleased
        }), 
        headers: {
            //data that we're grabbing from form that we're holding in teh body - sending back as json object.
            'Content-Type': 'application/json'
        }
    })

    //ask Josh - how to use wehre to get right movies back.

    //might have to seed database for things to work with genres, streaming services, etc. make it so when values are passed, db can return something when it reads those values.

    //ask josh - what does intermediary fetch need to be? we're grabbing from form, and grabbing values - but how does that get passed to search route to get right return?

    document.location.replace('/advancedSearch')
};


document.querySelector('#searchForm').addEventListener('submit', advancedSearch);