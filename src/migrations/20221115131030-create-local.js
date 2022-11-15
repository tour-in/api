'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Locals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Cidades", key: "id" },
      },
      nome_fantasia: {
        type: Sequelize.STRING
      },
      razao_social: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      capa: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.TEXT
      },
      endereco: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.TEXT
      },
      whatsapp: {
        type: Sequelize.TEXT
      },
      responsavel: {
        type: Sequelize.STRING
      },
      proprietario: {
        type: Sequelize.STRING
      },
      capacidade: {
        type: Sequelize.INTEGER
      },
      colaboradores: {
        type: Sequelize.INTEGER
      },
      colaboradores_temporarios: {
        type: Sequelize.INTEGER
      },
      redes_sociais: {
        type: Sequelize.TEXT
      },
      recebe_excursoes: {
        type: Sequelize.BOOLEAN
      },
      parceria_agencias: {
        type: Sequelize.BOOLEAN
      },
      recebe_eventos: {
        type: Sequelize.STRING
      },
      horarios: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Locals');
  }
};