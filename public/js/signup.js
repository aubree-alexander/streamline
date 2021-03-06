
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#userNameInput').value.trim();
    const password = document.querySelector('#passWordInput').value.trim();

    if (username && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
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

document.querySelector('#signupForm').addEventListener('submit', signupFormHandler);
