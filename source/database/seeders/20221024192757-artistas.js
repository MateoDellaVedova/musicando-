module.exports = {
  async up (queryInterface, Sequelize) {

      let artistas = [
         {
          id: 1,
          nombre: "David",
          apellido: "Gilmour"
         },
         {
          id: 2,
          nombre: "Roger",
          apellido: "Waters"
         },
         {
          id: 3,
          nombre: "Syd",
          apellido: "Barret"
         },
       ]

     await queryInterface.bulkInsert('artistas',artistas, {});
   
  },

  async down (queryInterface, Sequelize) {
    
   
     await queryInterface.bulkDelete('artistas', null, {});
     
  }
};
