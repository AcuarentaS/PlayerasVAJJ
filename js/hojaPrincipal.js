const modal = document.getElementById('modalContainer');
const btnCloseModal = document.getElementById('btnCloseModal');

btnCloseModal.addEventListener('click', () => {
    modal.removeAttribute('open');
});