module.exports = {
  async up (queryInterface, Sequelize) {

      let canciones = [
         {
          id: 1,
          titulo: "Speak to me",
          duracion: 1,
          genero_id: 2,
          album_id: 1,
          artista_id: 3
         },
         {
          id: 2,
          titulo: "The great gig in the sky",
          duracion: 4,
          genero_id: 2,
          album_id: 1,
          artista_id: 3
         },
         {
          id: 3,
          titulo: "Time",
          duracion: 6,
          genero_id: 2,
          album_id: 1,
          artista_id: 3
         },
         {
          id: 4,
          titulo: "In the flesh?",
          duracion: 3,
          genero_id: 1,
          album_id: 2,
          artista_id: 2
         },
         {
          id: 5,
          titulo: "Bring the boys back home",
          duracion: 1,
          genero_id: 1,
          album_id: 2,
          artista_id: 2
         },
         {
          id: 6,
          titulo: "Stop",
          duracion: 0.5,
          genero_id: 1,
          album_id: 2,
          artista_id: 2
         },
         {
          id: 7,
          titulo: "Cluster one",
          duracion: 6,
          genero_id: 3,
          album_id: 3,
          artista_id: 1
         },
         {
          id: 8,
          titulo: "What do you want from me",
          duracion: 4,
          genero_id: 3,
          album_id: 3,
          artista_id: 1
         },
         {
          id: 9,
          titulo: "Poles apart",
          duracion: 7,
          genero_id: 3,
          album_id: 3,
          artista_id: 1
         },
       ]

     await queryInterface.bulkInsert('canciones',canciones, {});
   
  },

  async down (queryInterface, Sequelize) {
    
   
     await queryInterface.bulkDelete('canciones', null, {});
     
  }
};
