module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("customers", {
      Customer_Id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      Customer_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      Mobile_No: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      Address: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      City: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      State: {
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

