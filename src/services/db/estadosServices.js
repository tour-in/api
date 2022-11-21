const Services = require("./services");
// const database = require("../../models");

class EstadosServices extends Services {
  constructor() {
    super("Estados");
  }
}

module.exports = EstadosServices;