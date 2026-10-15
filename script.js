console.log("script.js est bien relié");

const bouton_ouvrir = document.querySelector('#btn_ouvrir');
const bouton_fermer = document.querySelector('#btn_fermer');
const dialog = document.querySelector('#popup');

bouton_ouvrir.addEventListener('click', () => {
dialog.showModal();
});

bouton_fermer.addEventListener('click', () => {
dialog.close();
});