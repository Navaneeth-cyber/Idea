function googleLogin() {
  alert('Google Login: Coming Soon!');
  document.getElementById('login').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
}

function logout() {
  document.getElementById('login').style.display = 'block';
  document.getElementById('dashboard').style.display = 'none';
}
