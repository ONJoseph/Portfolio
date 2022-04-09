/* global fetchdata, */

contact.addEventListener("submit", (event) => {
    contact.submit();
  },);

const theName = document.querySelector(".contact-name");
const yourMessage = document.querySelector(".contact-message");

// listen for inputs to create form objects

contact.addEventListener("input", () => {
  const dataObject = {
    gotYourName: theName.value,
    gotYourMail: mail.value,
    gotYourMessage: yourMessage.value,
  };

  // saving to local storage

  localStorage.setItem("formData", JSON.stringify(dataObject));
});

// retrieving data from local storage

const fetchdata = JSON.parse(localStorage.getItem("formData"));
if (fetchdata) {
  theName.value = fetchdata.gotYourName;
  mail.value = fetchdata.gotYourMail;
  yourMessage.value = fetchdata.gotYourMessage;
  }

  // saving to local storage

  localStorage.setItem("formData", JSON.stringify(dataObject));
