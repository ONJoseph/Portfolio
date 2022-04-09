document.querySelector('#contact').addEventListener('submit', () => {
 localStorage.clear();
  const userInfo = {
  username: document.querySelector('#name').value,
  email: document.querySelector('#email').value,
  messge: document.querySelector('#message').value,
 };
localStorage.setItem('userdata', JSON.stringify(userInfo));
});
