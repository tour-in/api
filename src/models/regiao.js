'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Regiao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Regiao.belongsTo(models.Estados, {
        foreignKey: 'estado_id'
      })
      Regiao.belongsToMany(models.Cidades, {
        through: "Regiao_Cidades",
        foreignKey: "regiao_id",
      });
    }
  }
  Regiao.init({
    estado_id: DataTypes.INTEGER,
    regiao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Regiao',
    paranoid: true,
  });
  return Regiao;
};