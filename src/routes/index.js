const express = require("express");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({
      resultado: "rob.valdo 1.0.0 - ALPHA",
    });
  });

  app.use(express.json());
};

module.exports = routes;
