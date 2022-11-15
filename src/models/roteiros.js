'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roteiros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roteiros.belongsToMany(models.Local, {
        through: "Local_Roteiros",
        foreignKey: "roteiro_id",
      });
    }
  }
  Roteiros.init({
    cidade_id: DataTypes.INTEGER,
    roteiro: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roteiros',
    paranoid: true,
  });
  return Roteiros;
};