//AA - this isn't working...not giving an alert or redirecting to homepage. we're close though! 
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#userNameInput').value.trim();
    const password = document.querySelector('#passWordInput').value.trim();

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
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#accountBtn').addEventListener('submit', signupFormHandler);
