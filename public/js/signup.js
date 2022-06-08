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
        document.location.replace('/');
    } else {
        alert('Failed to sign up');
    }
};

const existingAccount = function(event) {
    event.preventDefault();

    document.location.replace('/login');
}

//AA - need to update id with what Jenna has for both of these event listener
document.querySelector('#').addEventListener('submit', signupFormHandler);

document.querySelector('#have-account-login').addEventListener('submit', existingAccount)