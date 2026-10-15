console.log("script.js est bien relié");

const bouton = document.querySelector('#btn_loisirs');
const popup = document.querySelector('#popup');

bouton.addEventListener('click', () => {
popup.classList.toggle("cache");
});