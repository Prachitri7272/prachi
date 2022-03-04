module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("orderdetails", {
      quantityOrder: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      priceEach: {
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