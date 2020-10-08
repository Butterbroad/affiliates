//registration form validation
const regForm = document.getElementById('reg-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const telegram = document.getElementById('telegram');
const skype = document.getElementById('skype');

regForm.addEventListener('submit', event => {
  event.preventDefault();
  checkRegistrationInputs();
});

function checkRegistrationInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  //check email
  if (emailValue === '') {
    setErrorFor(email, '!Введите вашу почту');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, '!Введите корректную почту');
  } else {
    setSuccessFor(email);
  }

  //check password
  if (passwordValue === '') {
    setErrorFor(password, '!Введите пароль');
  } else {
    setSuccessFor(password);
  }

  if (password2Value === '') {
    setErrorFor(password2, '!Введите пароль');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, '!Пароли должны совпадать');
  } else {
    setSuccessFor(password2);
  }
}


//enter form validation
const enterForm = document.getElementById('enter-form');
const email1 = document.getElementById('email1');
const password3 = document.getElementById('password3');

enterForm.addEventListener('submit', event => {
  event.preventDefault();
  checkEnterInputs();
});

function checkEnterInputs() {
  const emailValue = email1.value.trim();
  const passwordValue = password3.value.trim();

  //check email
  if (emailValue === '') {
    setErrorFor(email1, '!Введите вашу почту');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email1, '!Введите корректную почту');
  } else {
    setSuccessFor(email1);
  }

  //check password
  if (passwordValue === '') {
    setErrorFor(password3, '!Введите пароль');
  } else {
    setSuccessFor(password3);
  }
}



//set error class
function setErrorFor(input, message) {
  const inputParent = input.parentElement;
  const error = inputParent.querySelector('small');
  inputParent.className = `form__item ${inputParent.classList[1]} error`;
  error.innerHTML = message;
}

//set valid class
function setSuccessFor(input) {
  const inputParent = input.parentElement;
  inputParent.className = `form__item ${inputParent.classList[1]} valid`;
}

//email regex
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//undisable form button
const regCheckbox = document.getElementById('checkbox1');
const regBtn = document.querySelector('.form__btn_reg');
regBtn.disabled = true;

regCheckbox.addEventListener('change', () => {
  regBtn.disabled = !regBtn.disabled;
});