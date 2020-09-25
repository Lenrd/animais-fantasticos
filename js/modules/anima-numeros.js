export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento numeravel do DOM e incrementa o valor dele até o máximo de total
  static incrementarNumero(numero) {
    const total = +numero.textContent;
    const incremento = Math.floor(total / 100);
    let contador = 0;
    const timer = setInterval(() => {
      contador += incremento;
      numero.textContent = contador;
      if (contador > total) {
        numero.textContent = total;
        clearInterval(timer);
      }
    }, 13 * Math.random());
  }

  animaNumeros() {
    // é necessário convocar o constructor porque incrementar agora é parte da classe e não método em si
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
