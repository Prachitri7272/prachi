module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("products", {
      productId:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      productName: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      productType: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      productDescription: {
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