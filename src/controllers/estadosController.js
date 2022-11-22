const { EstadosServices } = require("../services/db");
const service = new EstadosServices();
class EstadosController {
  static modulo = "Setores";
  static getAll = async (req, res) => {
    try {
      const dados = await service.listaTodosRegistros();
      return res.status(200).json(dados);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
  static getOne = async (req, res) => {
    const { id } = req.params;
    try {
      const dados = await service.listaUmRegistro({ id });
      return res.status(200).json(dados);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  static insert = async (req, res) => {
    const body = req.body;
    try {
      const dados = await service.insereRegistro(body);
      return res.status(200).json(dados);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  static update = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    let mensagem;
    try {
      const dados = await service.atualizaRegistro(body, id);
      if (dados[0]) {
        mensagem = "Dados atualizado com sucesso!";
      } else {
        mensagem = "Nenhum dado foi encontrato para atualizar!";
      }
      return res.status(200).json({ mensagem: mensagem });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  static delete = async (req, res) => {
    const { id } = req.params;
    let mensagem;
    try {
      const dados = await service.deletaRegistro(id);
      if (dados) {
        mensagem = "Dado excluído com sucesso!";
      } else {
        mensagem = "Esse dado ja foi removido!";
      }
      return res.status(200).json({ mensagem: mensagem });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
}

module.exports = EstadosController;