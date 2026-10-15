console.log("script.js est bien relié");

const bouton_ouvrir = document.querySelector('#btn_ouvrir');
const bouton_troll = document.querySelector('#btn_troll');
const bouton_fermer = document.querySelector('#btn_fermer');
const dialog = document.querySelector('#popup');
const dialog_troll = document.querySelector('#popup_troll');

bouton_ouvrir.addEventListener('click', () => {
dialog.showModal();
});

bouton_troll.addEventListener('click', () => {
dialog_troll.showModal();
dialog.close();
});

bouton_fermer.addEventListener('click', () => {
dialog_troll.close();
});