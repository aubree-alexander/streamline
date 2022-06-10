async function loginFormHandler(event) {
    event.preventDefault();
  
    // *** SAM *** check to make sure these are accurate
    const username = document.querySelector('#userNameLI').value.trim();
    const password = document.querySelector('#userPassLI').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        // *** SAM *** not to 'dashboard' I assume
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
//   ***SAM*** check .login-form below for accuacy
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  