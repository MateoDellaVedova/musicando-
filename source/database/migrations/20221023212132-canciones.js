'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("canciones", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        titulo: {
          type: Sequelize.STRING,
        },
        duracion: {
          type: Sequelize.INTEGER
        },
        genero_id: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        album_id: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        artista_id: {
          type: Sequelize.INTEGER,
          allowNull: true
        }
       
      });
    } catch (error) {
      
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('canciones');
  }
};
