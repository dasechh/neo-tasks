const form = document.querySelector('.form');
const fullNameInput = form.querySelector('#fullName');
const passwordInput = form.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  if (!checkFullNameValidity(fullNameInput)) {
    valid = false;
  }
  if (!checkPasswordValidity(passwordInput)) {
    valid = false;
  }

  if (valid) {
    form.submit();
  }
});

function checkFullNameValidity(fullNameInput) {
  const fullName = fullNameInput.value;
  const errors = [];

  if (!/^[a-zA-ZА-Яа-яёЁ\s]+$/.test(fullName)) {
    errors.push('Use only letters.');
  }
  if (!fullName || !fullName.length) {
    addError(fullNameInput, 'Cant be empty');
    return false;
  }
  if (errors.length > 0) {
    addError(fullNameInput, errors.join(' '));
    return false;
  }

  removeError(fullNameInput);
  return true;
}

function checkPasswordValidity(passwordInput) {
  const password = passwordInput.value.trim();
  const errors = [];

  if (password.length < 6 || password.length > 20) {
    addError(passwordInput, 'Should be 6-20 characters');
    return false;
  }
  if (!/\d/.test(password)) {
    errors.push('Should contain atleast 1 number.');
  }
  if (!/[A-ZА-Я]/.test(password)) {
    errors.push('Should countain atleast 1 capital.');
  }
  if (errors.length > 0) {
    addError(passwordInput, errors.join(' '));
    return false;
  }

  removeError(passwordInput);
  return true;
}

function addError(input, message) {
  const inputParent = input.parentElement;
  const errorElement = inputParent.querySelector('.form__error');
  errorElement.innerText = message;
  input.classList.add('form__input--error');
  input.classList.remove('form__input--success');
}

function removeError(input) {
  const inputParent = input.parentElement;
  const errorElement = inputParent.querySelector('.form__error');
  errorElement.innerText = '';
  input.classList.remove('form__input--error');
  input.classList.add('form__input--success');
}
