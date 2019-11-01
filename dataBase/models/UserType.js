module.exports = (sequelize, DataTypes) => {
    const UserType = sequelize.define('UserType',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        label:{
            type:DataTypes.STRING
        },
    },{
        tableName:'user_type',
        timestamps: false
    });

    return UserType
};
