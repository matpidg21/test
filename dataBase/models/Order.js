module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },

    }, {
        tableName: 'order',
        timestamps: false
    });

    const User = sequelize.import('./User.js');
    const Product = sequelize.import('./Product.js');


    Order.belongsTo(User, {foreignKey: 'user_id'});
    Order.belongsTo(Product,{foreignKey: 'product_id'});


    return Order
};
