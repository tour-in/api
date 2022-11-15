'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Regiao_Cidades', {
      regiao_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Regiaos',
          key: 'id'
        }
      },
      cidade_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Cidades',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Regiao_Cidades');
  }
};