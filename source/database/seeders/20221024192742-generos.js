module.exports = {
  async up (queryInterface, Sequelize) {

      let generos = [
         {
          id: 1,
          name: "Rock progresivo"
         },
         {
          id: 2,
          name: "Rock Psicodelico"
         },
         {
          id: 3,
          name: "Rock sinfonico"
         },
       ]

     await queryInterface.bulkInsert('generos',generos, {});
   
  },

  async down (queryInterface, Sequelize) {
    
   
     await queryInterface.bulkDelete('generos', null, {});
     
  }
};