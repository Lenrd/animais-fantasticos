export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir');
  const botaoFechar = document.querySelector('[data-modal="fechar');
  const modalContainer = document.querySelector('[data-modal="container');

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function clickFora(event) {
    if (this === event.target) toggleModal(event); // verfica se o modal está ou não recebendo o click
  }

  if (botaoAbrir && botaoFechar && modalContainer) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", clickFora);
  }
}
