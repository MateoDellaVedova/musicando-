const { albumes, artistas, canciones, generos } = require('../database/models');

const musicandoApi = {
    all: async(req,res) => {
        try {
            let cancion = await canciones.findAll({
                include: {
                    all: true
                }
            });
            return res.status(200).json(cancion);

        } catch (error) {
            return res.status(500).json(error);
        }
    },
    one: async (req, res) =>{
        try {
            let one = await canciones.findByPk(
                req.params.id, {
                    include: {
                        all: true
                    }
                }
            )
            if(one){
                return res.status(200).json(one);
            }else{
                return res.status(404).json('No se encontró esta canción.');
            }
        } catch (error) {
            return res.status(500).json(error);
        }

    },
    creation: async (req, res) =>{

        try {
            let newSong = await canciones.create(req.body);

            if(newSong){
                return res.status(200).json(newSong);
            }else{
                return res.status(404).json('No se creó la canción');
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    songDestroy: async (req, res) =>{     
   
        try {
            let song = await canciones.findByPk(req.params.id)
    
            if(!song){
                return res.status(404).json('No se encontro la canción');
            }
    
            let deleted = await song.destroy()
    
            if(deleted){
                return res.status(200).json(true);
            }else{
                return res.status(500).json(false);
            }
        } catch (error) {
            return res.status(500).json(error);
        } 
    },
    edit: async ( req , res ) => {
        try{
        let song = await canciones.findByPk(req.params.id,{include:{all:true}})
        if(!song){
            return res.status(404).json('No se encontro la canción');
        }
        let newSong = await song.update(req.body);
        if(newSong){
            return res.status(200).json(true);
        }else{
            return res.status(500).json(false);
        }
    } catch (error) {
        return res.status(500).json(error);
    } 
  }
    }

module.exports = musicandoApi;