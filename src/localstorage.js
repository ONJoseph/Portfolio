/* global fetchdata, formData, dataObject, name, email, message */
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
// saving to local storage

localStorage.setItem('formData', JSON.stringify(dataObject));

// retrieving data from local storage

const fetchdata = JSON.parse(localStorage.getItem('formData'));
if (fetchdata) {
  name.value = fetchdata.gotYourName;
  email.value = fetchdata.gotYourMail;
  message.value = fetchdata.gotYourMessage;
}
