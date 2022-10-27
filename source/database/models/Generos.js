module.exports = (sequelize, DataTypes) => {
    let alias = 'generos';
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
          }
    };
    let config = {
        timestamps:false,
        deletedAt:false
    };
    const generos = sequelize.define(alias,cols,config)

    generos.associate = function(models){
        generos.hasMany(models.canciones, {
            as: 'canciones',
            foreignKey: 'genero_id'
        })
    }

    return generos
}