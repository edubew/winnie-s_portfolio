const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let valid = true;
  const email = document.getElementById('email').value;
  const emailArray = email.split('');

  for (let i = 0; i < emailArray.length; i += 1) {
    if (
      emailArray[i] !== emailArray[i].toLowerCase()
            && emailArray[i] !== '@' && emailArray[i] !== '.'
    ) {
      valid = false;
    }
  }

  if (valid) {
    error.innerHTML = '';
  } else {
    e.preventDefault();
    error.innerHTML = 'Please enter your email in lower case only';
  }
});
