module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNullL: false
        },
        wight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: 'product',
        timestamps: false
    });
    const User = sequelize.import('./User.js');

    Product.belongsTo(User, {foreignKey: 'user_id'});

    return Product;
};
