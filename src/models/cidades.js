'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cidades.belongsTo(models.Estados, {
        foreignKey: 'estado_id'
      })
      Cidades.hasMany(models.Roteiros, {
        foreignKey: "cidade_id",
      });
      Cidades.belongsToMany(models.Regiao, {
        through: "Regiao_Cidades",
        foreignKey: "cidade_id",
      });
      Cidades.belongsToMany(models.Usuarios, {
        through: "Usuarios_Cidades",
        foreignKey: "cidade_id",
      });
    }
  }
  Cidades.init({
    estado_id: DataTypes.INTEGER,
    cidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cidades',
    paranoid: true,
  });
  return Cidades;
};