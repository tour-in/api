const express = require("express");

const estados = require("./estadosRoutes");
const cidades = require("./cidadesRoutes");
const regioes = require("./regioesRoutes");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({
      resultado: "rob.valdo 1.0.0 - ALPHA",
    });
  });

  app.use(
    express.json(), 
    estados,
    cidades,
    regioes
  );
};

module.exports = routes;
