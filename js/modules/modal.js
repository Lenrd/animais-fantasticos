export default class Modal {
  constructor(botaoAbrir, botaoFechar, container) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.modalContainer = document.querySelector(container);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickFora = this.clickFora.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickFora(event) {
    if (event.target === this.modalContainer) this.eventToggleModal(event);
    // Target do evento foi alterado, precisa ser verificada a pariedade com container para funcionar
  }

  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.clickFora);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addModalEvent();
    }
    return this;
  }
}
