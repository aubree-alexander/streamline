async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#userNameInput').value.trim();
    const password = document.querySelector('#passWordConfirm').value.trim();

    if (username && password) {
        const response = await fetch('/api/user', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

// *** SAM *** make sure this matches
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
