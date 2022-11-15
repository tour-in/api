'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Local_Roteiros', {
      roteiro_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Roteiros',
          key: 'id'
        }
      },
      local_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Locals',
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
    await queryInterface.dropTable('Local_Roteiros');
  }
};