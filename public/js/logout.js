
const logOutBtn=document.querySelector('#logout')

async function logout() {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
  
//   *** SAM *** make sure '#logout' below is correct
  logOutBtn?.addEventListener('click', logout);
  console.log(logOutBtn);
  