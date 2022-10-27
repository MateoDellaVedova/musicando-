module.exports = (sequelize, DataTypes) => {
    let alias = 'artistas';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING,
          },
        apellido: {
            type: DataTypes.STRING
          }
    };
    let config = {
        timestamps:false,
        deletedAt:false
    };
    const artistas = sequelize.define(alias,cols,config)

    artistas.associate = function(models){
        artistas.hasMany(models.canciones, {
            as: 'canciones',
            foreignKey: 'artista_id'
        })
    }

    return artistas
}