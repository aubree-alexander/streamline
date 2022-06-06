const logout = async function() {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert('Failed to log out.')
    }
};

//AA - need to make sure id here aligns with what Jenna calls it in the views file.
document.querySelector('#logout-link').addEventListener('click', logout);