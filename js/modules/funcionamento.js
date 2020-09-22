export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemanas = funcionamento.dataset.semana.split(",").map((n) => {
    return +n;
  });
  const horarioSemana = funcionamento.dataset.horario.split(",").map((n) => {
    return +n;
  });
  const hoje = new Date();
  const dia = hoje.getDay();
  const hora = hoje.getHours();

  const diaAberto = diasSemanas.indexOf(dia) !== -1;
  const horaAberto = hora >= horarioSemana[0] && hora < horarioSemana[1];

  if (diaAberto && horaAberto) {
    funcionamento.classList.add("aberto");
  }
}
