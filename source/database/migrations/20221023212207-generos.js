'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("generos", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
       
      });
    } catch (error) {
      
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('generos');
  }
};
