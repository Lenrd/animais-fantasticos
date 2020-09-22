export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.textContent;
      const incremento = total / 100;
      let contador = 0;
      const timer = setInterval(() => {
        contador = Math.round(contador + incremento);
        numero.textContent = contador;
        if (contador > total) {
          numero.textContent = total;
          clearInterval(timer);
        }
      }, 13 * Math.random());
    });
  }
  let observer;

  const observerTarget = document.querySelector(".numeros");
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
