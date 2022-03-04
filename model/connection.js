const Sequelize=require('sequelize');

const sequelize = new Sequelize('companydb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'  /* one of  | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize.authenticate().then(()=>{
   console.log("database connection established");
}).catch(err=>{
    console.log("database connection NOT established", err.message);
})

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.customers=require('./customers.model')(sequelize,Sequelize);
db.employees=require('./employees.model')(sequelize,Sequelize);
db.offices=require('./offices.model')(sequelize,Sequelize);
db.orderdetails=require('./orderdetails.model')(sequelize,Sequelize);
db.orders=require('./orders.model')(sequelize,Sequelize);
db.payments=require('./payments.model')(sequelize,Sequelize);
db.productlines=require('./productlines.model')(sequelize,Sequelize);
db.products=require('./products.model')(sequelize,Sequelize);


db.products.hasMany(db.orderdetails);
db.orderdetails.belongsTo(db.products);
db.orders.hasMany(db.orderdetails);
db.orderdetails.belongsTo(db.orders);
db.customers.hasMany(db.orders);
db.orders.belongsTo(db.customers);
db.customers.hasMany(db.payments);
db.payments.belongsTo(db.customers);
db.offices.hasMany(db.employees);
db.employees.belongsTo(db.offices);
db.productlines.hasMany(db.products);
db.products.belongsTo(db.productlines);







module.exports=db;
