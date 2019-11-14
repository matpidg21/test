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
        count: {
            type: DataTypes.INTEGER
        },
        carrier_id:{
            type: DataTypes.STRING
        },
        recipient_id:{
            type: DataTypes.STRING
        },
        create_at: {
            type: DataTypes.STRING,
            defaultValue: sequelize.fn('now')
        },
        status: {
            type: DataTypes.STRING
        },
        recipient_email: {
            type: DataTypes.STRING
        },


    }, {
        tableName: 'order',
        timestamps: false
    });

    const User = sequelize.import('./User.js');
    const Product = sequelize.import('./Product.js');

    Order.belongsTo(User, {foreignKey: 'recipient_id'});
    Order.belongsTo(User, {foreignKey: 'carrier_id'});
    Order.belongsTo(User, {foreignKey: 'user_id'});
    Order.belongsTo(Product,{foreignKey: 'product_id'});


    return Order
};
