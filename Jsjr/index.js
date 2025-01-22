// Obtener referencias
const cartas = document.querySelectorAll('.carta');
const modal = document.getElementById('modal');
const modalTexto = document.getElementById('modal-texto');
const closeModal = document.getElementById('close-modal');

// Abrir modal al hacer clic en una carta
cartas.forEach(carta => {
  carta.addEventListener('click', () => {
    const texto = carta.getAttribute('data-texto'); // Obtener el texto de la carta
    modalTexto.textContent = texto; // Mostrar el texto en el modal
    modal.style.display = 'flex'; // Mostrar el modal
  });
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de la ventana
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
