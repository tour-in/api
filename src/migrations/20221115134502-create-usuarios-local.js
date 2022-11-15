'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios_Locals', {
      local_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Locals',
          key: 'id'
        }
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Usuarios',
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
    await queryInterface.dropTable('Usuarios_Locals');
  }
};