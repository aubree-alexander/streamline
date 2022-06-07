const loginFormHandler = async function(event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#login-username');
    const passwordEl = document.querySelector('#login-password');

    const response = await fetch('/api/user/login', {
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
        alert('Failed to login.');
    }
};

//AA - we will need to make sure id lines up with what Jenna created in the views folder.
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);