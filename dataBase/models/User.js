module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
        },
        phone_number: {
            type: DataTypes.INTEGER
        },
        type_id: {
            type: DataTypes.INTEGER
        },

    }, {
        tableName: 'user',
        timestamps: false
    });
    const UserType = sequelize.import('./UserType.js');

    User.belongsTo(UserType, {foreignKey: 'type_id'});

    return User;
};
