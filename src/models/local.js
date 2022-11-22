'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Local extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Local.belongsTo(models.Cidades, {
        foreignKey: "cidade_id",
      });
      Local.belongsToMany(models.Regiao, {
        through: "Local_Roteiros",
        foreignKey: "local_id",
      });
      Local.belongsToMany(models.Usuarios, {
        through: "Usuarios_Locals",
        foreignKey: "local_id",
      });
    }
  }
  Local.init({
    cidade_id: DataTypes.INTEGER,
    nome_fantasia: DataTypes.STRING,
    razao_social: DataTypes.STRING,
    logo: DataTypes.STRING,
    capa: DataTypes.STRING,
    cnpj: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado) {
          if (dado.length !== 14)
            throw new Error("o campo nome deve ter mais 14 caracteres");
        },
      },
    },
    descricao: DataTypes.TEXT,
    endereco: DataTypes.STRING,
    telefone: DataTypes.TEXT,
    whatsapp: DataTypes.TEXT,
    responsavel: DataTypes.STRING,
    proprietario: DataTypes.STRING,
    capacidade: DataTypes.INTEGER,
    colaboradores: DataTypes.INTEGER,
    colaboradores_temporarios: DataTypes.INTEGER,
    redes_sociais: DataTypes.TEXT,
    recebe_excursoes: DataTypes.BOOLEAN,
    parceria_agencias: DataTypes.BOOLEAN,
    recebe_eventos: DataTypes.STRING,
    horarios: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Local',
  });
  return Local;
};