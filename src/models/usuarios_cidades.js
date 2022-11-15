'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios_Cidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuarios_Cidades.init({
    cidade_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios_Cidades',
  });
  return Usuarios_Cidades;
};