'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Regiao_Cidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Regiao_Cidades.init({
    regiao_id: DataTypes.INTEGER,
    cidade_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Regiao_Cidades',
  });
  return Regiao_Cidades;
};