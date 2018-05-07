const signupForm = document.getElementById('signup-form');
const apiURL = 'http://fakerestapi.azurewebsites.net/';
const formErr = document.getElementById('error');

// username.onfocus = formErr.removeClass('d-block').addClass('d-none');
// password.onfocus = formErr.removeClass('d-block').addClass('d-none');

signupForm.onsubmit = (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const newUser = { UserName: username, Password: password };

  fetch(`${apiURL}/api/Users`, {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(newUser)
  })
  .then(response => response.json())
  .then(user => {
    localStorage.setItem(username, user.UserName);

    window.location.href = './catalogue_page.html';
  })

};