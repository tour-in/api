'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Local_Roteiros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Local_Roteiros.init({
    roteiro_id: DataTypes.INTEGER,
    local_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Local_Roteiros',
  });
  return Local_Roteiros;
};