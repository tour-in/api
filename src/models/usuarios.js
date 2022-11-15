'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuarios.init({
    usuario_pai: DataTypes.INTEGER,
    tipo: DataTypes.ENUM("administrador","tourin","gestor","empreendedor","colaborador"),
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuarios',
    paranoid: true,
  });
  return Usuarios;
};