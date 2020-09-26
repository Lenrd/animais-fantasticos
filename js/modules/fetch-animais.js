import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // cria divs com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3>
    <span data-numero >${animal.total}</span>`;

    return div;
  }

  // carrega os animais na tela
  const numerosGrid = document.querySelector(target);
  function carregaAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function iniciaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // carrega animais em arquivo json
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => carregaAnimais(animal));
      iniciaAnimaisNumeros();
    } catch (err) {
      console.error(err);
    }
  }

  return criarAnimais();
}
