const withAuth = require('../../utils/auth.js');
//AA - need to tie in withAuth so they can only edit an entry once logged in.

const editEntry = async function(event) {
    event.preventDefault();

    //AA - add consts here and document.querySelector for the id's of the fields in the new entry form

    //AA - add await fetch here
    document.location.replace('/homepage');
}

//AA - update id here
document.querySelector('#').addEventListener('submit', editEntry);




