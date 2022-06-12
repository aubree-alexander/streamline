async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#userNameLI').value.trim();
    const password = document.querySelector('#userPassLI').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
  }
  
document.querySelector('#loginBtn')?.addEventListener('click', loginFormHandler);
  
  