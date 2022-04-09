/* global fetchdata, formData, dataObject, email, form, message */
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

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
}
else {
  // Too bad, no localStorage for us
}
storageAvailable('sessionStorage');

if(!localStorage.getItem('contact__name')) {
  populateStorage();
} else {
  setStyles();
}
  form.contact_name.addEventListener('change', setFormValues);
  form.contact_email.addEventListener('change', setFormValues);
  form.contact_message.addEventListener('change', setFormValues);
  
    if (JSON.parse(localStorage.getItem('formData')) === null) {
    name = '';
    email = '';
    message = '';
  } else {
   ({ name, email, message } = JSON.parse(localStorage.getItem('formData')));
  }
   if (name !== 'empty' || email !== 'empty' || message !== 'empty') {
    form.contact_name.value = name;
    form.contact_email.value = email;
    form.contact_message.value = message;
  }
    // Reset form

  const resetButton = document.querySelector('.btn--reset');

  const resetForm = () => {
    form.contact_name.value = '';
    form.contact_email.value = '';
    form.contact_message.value = '';
    
  localStorage.removeItem('formData');
  };

  resetButton.addEventListener('click', resetForm);
}
