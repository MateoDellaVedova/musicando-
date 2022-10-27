'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("artistas", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },

        nombre: {
          type: Sequelize.STRING,
        },
        apellido: {
          type: Sequelize.STRING
        }
       
      });
    } catch (error) {
      
    }
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('artistas');
  }
};
