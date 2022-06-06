const signupFormHandler = async function(event) {
    event.preventDefault();

    //AA - need to match these id's with what Jenna has
    const usernameEl = document.querySelector('#');
    const passwordEl = document.querySelector('#');

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert('Failed to sign up');
    }
};

//AA - need to update id with what Jenna has
document.querySelector('#').addEventListener('submit', signupFormHandler);