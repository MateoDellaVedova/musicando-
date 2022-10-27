'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("albumes", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },

        nombre: {
          type: Sequelize.STRING,
        },
        duracion: {
          type: Sequelize.INTEGER
        }
       
      });
    } catch (error) {
      
    }
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('albumes');
  }
};
