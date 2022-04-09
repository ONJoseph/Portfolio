export const name = document.querySelector('.contact__name');

export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
            // Firefox
            || e.code === 1014
            // test name field too, because code might not be present
            // everything except Firefox
            || e.name === 'QuotaExceededError'
            // Firefox
            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
            // acknowledge QuotaExceededError only if there's something already stored
            && (storage && storage.length !== 0);
  }
}

const formInputs = [form.name, form.email, form.message];

// When user changes content in any form input, save data to local storage
addEventListeners(formInputs, 'change', () => {
  localStorage.setItem('form', JSON.stringify(
    {
      name: formInputs[0].value,
      email: formInputs[1].value,
      message: formInputs[2].value,
    },
  ));
});

// When page loads, populate form inputs with data from local storage
function populateForm() {
  if (localStorage.length > 0) {
    const formData = JSON.parse(localStorage.getItem('form'));
    formInputs.forEach((formInput) => {
      formInput.value = formData[formInput.id];
    });
  }
}

window.addEventListener('load', populateForm);
