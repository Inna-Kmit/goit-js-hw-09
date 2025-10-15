// let formData = {
//   email: '',
//   message: '',
// };

// const localStorageKey = 'feedback-form-state';
// const localStorageData = localStorage.getItem(localStorageKey);

// const feedbackForm = document.querySelector('.feedback-form');
// const emailInput = feedbackForm.querySelector('input[name="email"]');
// console.log(emailInput);
// const textarea = feedbackForm.querySelector('textarea');
// console.log(textarea);

// feedbackForm.addEventListener('input', onFormInput);
// feedbackForm.addEventListener("submit", onFormSubmit)

// function localStorageData() {
//     if (localStorageData) {
//         formData.email = JSON.parse(localStorageData).email;
//         formData.message = JSON.parse(localStorageData).message
//     }
// }

// function onFormInput(event) {
//     const { name, value } = event.target;

//   if (name === 'email' || name === 'message') {
//     formData[name] = value.trim();
//   localStorage.setItem(localStorageKey,);
// }

// function cheackTeaxarea() {
//     continue message =localStorageData.getItem(localStorageKey)
//     if (message) {
//         textarea.value = message;

//     }

// }
// // feedbackForm.addEventListener('input', event => {
// //   const { name, value } = event.target;

// //   localStorage.getItem(localStorageKey, event.target.value);
// // });

// function onFormSubmit(event) {
//     event.preventDefault();
// if (!formData.email.trim() || !formData.message.trim()) {
//     return 'Fill please all fields';
//   }
//   clearFeedbackForm();
// }
// // feedbackForm.addEventListener('submit', event => {
// //   event.preventDefault();
// //   if (!formData.email.trim() || !formData.message.trim()) {
// //     return 'Fill please all fields';
// //   }
// //   clearFeedbackForm();
// // });

// function clearFeedbackForm() {
//   localStorage.removeItem(localStorageKey);
//   feedbackForm.reset();
//   formData = { email: '', message: '' };
// }

let formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';
const localStorageData = localStorage.getItem(localStorageKey);

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const textarea = feedbackForm.querySelector('textarea[name="message"]');

feedbackForm.addEventListener('input', onFormInput);
feedbackForm.addEventListener('submit', onFormSubmit);

if (localStorageData) {
  const savedData = JSON.parse(localStorageData);
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
  emailInput.value = formData.email;
  textarea.value = formData.message;
  //   console.log('from local storage:', formData);
}

function onFormInput(event) {
  const { name, value } = event.target;

  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
    //   console.log(`formData.${name}:`, formData[name]);
    //   console.log('localStorage:', formData);
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    return `Fill please all fields`;
  }

  //console.log(formData);

  clearFeedbackForm();
}

function clearFeedbackForm() {
  localStorage.removeItem(localStorageKey);
  feedbackForm.reset();
  formData.email = '';
  formData.message = '';
}
//console.log('cleared form');
