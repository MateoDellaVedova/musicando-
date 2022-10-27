module.exports = (sequelize, DataTypes) => {
    let alias = 'albumes';
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
        duracion: {
            type: DataTypes.INTEGER
          }
    };
    let config = {
        timestamps:false,
        deletedAt:false
    };
    const albumes = sequelize.define(alias,cols,config)

    albumes.associate = function(models){
        albumes.hasMany(models.canciones, {
            as: 'canciones',
            foreignKey: 'album_id'
        })
    }
    
    return albumes
}
