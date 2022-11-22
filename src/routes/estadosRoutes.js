const express = require("express");
const EstadosController = require("../controllers/estadosController");

const router = express.Router();
const base = "/api/v1/estados";

router
  .get(`${base}`, EstadosController.getAll)
  .get(`${base}/:id`, EstadosController.getOne)
  .post(`${base}`, EstadosController.insert)
  .put(`${base}/:id`, EstadosController.update)
  .delete(`${base}/:id`, EstadosController.delete);

module.exports = router;