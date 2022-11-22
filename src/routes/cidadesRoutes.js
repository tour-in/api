const express = require("express");
const CidadesController = require("../controllers/cidadesController");

const router = express.Router();
const base = "/api/v1/cidades";

router
  .get(`${base}/:id`, CidadesController.getAll)
  .post(`${base}`, CidadesController.insert)
  .put(`${base}/:id`, CidadesController.update)
  .delete(`${base}/:id`, CidadesController.delete);

module.exports = router;