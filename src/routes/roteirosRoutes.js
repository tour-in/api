const express = require("express");
const RoteirosController = require("../controllers/roteirosController");

const router = express.Router();
const base = "/api/v1/roteiros";

router
  .get(`${base}`, RoteirosController.getAll)
  .get(`${base}/:id`, RoteirosController.getOne)
  .post(`${base}`, RoteirosController.insert)
  .put(`${base}/:id`, RoteirosController.update)
  .delete(`${base}/:id`, RoteirosController.delete);

module.exports = router;