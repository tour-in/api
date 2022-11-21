const database = require("../../models");

class Services {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }
  async listaTodosRegistros(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...where } });
  }
  async listaUmRegistro(where = {}) {
    return database[this.nomeDoModelo].findOne({ where: { ...where } });
  }
  async insereRegistro(dados) {
    return database[this.nomeDoModelo].create(dados);
  }
  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return database[this.nomeDoModelo].update(
      dadosAtualizados,
      { where: { id: id } },
      transacao
    );
  }
  async deletaRegistro(id) {
    return database[this.nomeDoModelo].destroy({ where: { id: id } })
  }

  diferencaDatas = (dataFuturo, dataPassado) => {
    let delta = (dataFuturo - dataPassado) /1000
      let days = Math.floor(delta / 86400);
      delta -= days * 86400;

      // calculate (and subtract) whole hours
      let hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;

      // calculate (and subtract) whole minutes
      let minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;

      // what's left is seconds
      let seconds = delta % 60;
      // console.log(`Dia: ${days}, Horas: ${hours}, Minutos: ${minutes}, Segundos: ${seconds}`)
      return {
        dia: days,
        horas: hours,
        minutos: minutes,
        segundos: seconds,
      }
  }
}

module.exports = Services;