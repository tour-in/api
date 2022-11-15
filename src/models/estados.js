'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Estados.hasMany(models.Cidades, {
        foreignKey: "estado_id",
      });
      Estados.hasMany(models.Regiao, {
        foreignKey: "estado_id",
      });
    }
  }
  Estados.init({
    estado: DataTypes.STRING,
    uf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Estados',
    paranoid: true,
  });
  return Estados;
};