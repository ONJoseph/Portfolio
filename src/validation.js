/* global createElement, addEventListeners, removeElement, validateInputs */

const form = document.forms[0];
const submitButton = form['user-submit'];
let span = '';
const [...formInputs] = [form.name, form.email, form.message];
const [...errorMessage] = [
  'Please enter your name',
  'Email should be lower case in format user@mail.com',
  'Please enter your message',
];

// When user clicks Submit button, submit form if all form inputs are valid,
// Else display custom error message
submitButton.addEventListener('click', (event) => {
  removeElement(form.querySelector('span'));
  event.preventDefault(); // Prevent default form validation messages

  const invalidInput = validateInputs(formInputs);
  if (invalidInput === -1) {
    form.submit(); 
  } else {
    span = createElement('span', 'error', {}, errorMessage[invalidInput]);
    document.querySelector('form div').append(span);
  }
});

// Remove error message when user clicks on any form input
addEventListeners(formInputs, 'click', () => {
  removeElement(form.querySelector('span'));
});
