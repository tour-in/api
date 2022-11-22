const Services = require("./services");
const database = require("../../models");

class RegioesServices extends Services {
  constructor() {
    super("Regiao");
  }
  async listaTodosRegistros(where = {}) {
    return database[this.nomeDoModelo].findAll({
      where: { ...where },
      order: [["id", "DESC"]],
    });
  }
  async listaUmRegistro(where = {}) {
    return database[this.nomeDoModelo].findOne({
      where: { ...where },
    });
  }
  async insereRegistro(dados) {
    const obj = {
      estado_id: dados.estado_id,
      regiao: dados.regiao,
    };
    return database[this.nomeDoModelo].create(obj);
  }
  async atualizaRegistro(dados, id, transacao = {}) {
    const obj = {
      estado_id: dados.estado_id,
      regiao: dados.regiao,
    };
    return database[this.nomeDoModelo].update(
      obj,
      { where: { id: id } },
      transacao
    );
  }
}

module.exports = RegioesServices;
