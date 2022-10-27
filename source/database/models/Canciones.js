module.exports = (sequelize, DataTypes) => {
    let alias = 'canciones';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        titulo: {
            type: DataTypes.STRING,
          },
        duracion: {
            type: DataTypes.INTEGER
          },
        genero_id: {
            type: DataTypes.INTEGER,
            allowNull: true
          },
        album_id: {
            type: DataTypes.INTEGER,
            allowNull: true
          },
        artista_id: {
            type: DataTypes.INTEGER,
            allowNull: true
          }
    };
    let config = {
        timestamps:false,
        deletedAt:false
    };
    const canciones = sequelize.define(alias,cols,config)

    canciones.associate = function(models){
        canciones.belongsTo(models.albumes, {
            as: 'albumes',
            foreignKey: 'album_id'
        }),
        canciones.belongsTo(models.generos, {
            as: 'generos',
            foreignKey: 'genero_id'
        }),
        canciones.belongsTo(models.artistas, {
            as: 'artistas',
            foreignKey: 'artista_id'
        })
    }

    return canciones
}