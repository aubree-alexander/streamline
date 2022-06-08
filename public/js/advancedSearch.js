const advancedSearch = async function(event) {
    event.preventDefault();

    document.location.replace('/advancedSearch')
};

//here - make fetch to api route to get data from back end! 


document.querySelector('#advancedSearchBtn').addEventListener('click', advancedSearch)