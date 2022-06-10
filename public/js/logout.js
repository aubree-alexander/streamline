async function logout() {
    const response = await fetch('/api/user/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
//   *** SAM *** make sure '#logout' below is correct
  document.querySelector('#logout').addEventListener('click', logout);
  