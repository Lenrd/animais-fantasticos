export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemanas = this.funcionamento.dataset.semana.split(",").map((n) => {
      return +n;
    });
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map((n) => {
        return +n;
      });
  }

  dadosAgora() {
    this.hoje = new Date();
    this.dia = this.hoje.getDay();
    this.hora = this.hoje.getUTCHours() - 3;
  }

  estaAberto() {
    this.diaAberto = this.diasSemanas.indexOf(this.dia) !== -1;
    this.horaAberto =
      this.hora >= this.horarioSemana[0] && this.hora < this.horarioSemana[1];
    return this.diaAberto && this.horaAberto;
  }

  ativaAberto() {
    if (this.estaAberto) this.funcionamento.classList.add(this.activeClass);
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
