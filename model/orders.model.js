module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("orders", {
      Order_Id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      orderDate: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      deliveryDate: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      shippedDate: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      Status: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
    },
    {
    freezeTableName: true,
    // timestamps: false,
    //paranoid: false,
    //createdAt: 'created_at',
    //updatedAt: 'updated_at',
    });
  
    return model;
  };