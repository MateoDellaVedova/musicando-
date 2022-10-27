module.exports = {
  async up (queryInterface, Sequelize) {

      let albumes = [
         {
          id: 1,
          nombre: "The dark side of the moon",
          duracion: 16
         },
         {
          id: 2,
          nombre: "The Wall",
          duracion: 20
         },
         {
          id: 3,
          nombre: "The division bell",
          duracion: 33
         }
       ]

     await queryInterface.bulkInsert('albumes',albumes, {});
   
  },

  async down (queryInterface, Sequelize) {
    
   
     await queryInterface.bulkDelete('albumes', null, {});
     
  }
};
