//AA - this isn't complete - need to populate handebars template 
const advancedSearch = async function(event) {
    event.preventDefault();

    document.location.replace('/advancedSearch')
};


document.querySelector('#advancedSearchBtn').addEventListener('click', advancedSearch)