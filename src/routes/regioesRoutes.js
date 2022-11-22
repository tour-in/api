const express = require("express");
const RegioesController = require("../controllers/regioesController");

const router = express.Router();
const base = "/api/v1/regioes";

router
  .get(`${base}/:id`, RegioesController.getAll)
  .post(`${base}`, RegioesController.insert)
  .put(`${base}/:id`, RegioesController.update)
  .delete(`${base}/:id`, RegioesController.delete);

module.exports = router;