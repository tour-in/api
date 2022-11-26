const Services = require("./services");
const database = require("../../models");

class RoteirosServices extends Services {
  constructor() {
    super("Roteiros");
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
      cidade_id: dados.cidade_id,
      roteiro: dados.roteiro,
    };
    return database[this.nomeDoModelo].create(obj);
  }
  async atualizaRegistro(dados, id, transacao = {}) {
    const obj = {
      cidade_id: dados.cidade_id,
      roteiro: dados.roteiro,
    };
    return database[this.nomeDoModelo].update(
      obj,
      { where: { id: id } },
      transacao
    );
  }
}

module.exports = RoteirosServices;
