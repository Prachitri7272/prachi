module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("employees", {
      empID:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      emp_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      emp_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      emp_email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      mobile_no: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      emp_jobTitle: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      emp_password: {
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


 
 