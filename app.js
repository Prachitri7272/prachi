var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db= require('./model/connection');

const middleware = require('./middleware/jwt.middleware');
var employeesRouter = require('./routes/employees');
var customersRouter = require('./routes/customer');
var officesRouter = require('./routes/offices');
var orderdetailsRouter = require('./routes/orderdetails');
var ordersRouter = require('./routes/orders');
var paymentRouter = require('./routes/payments');
var productlineRouter = require('./routes/productlines');
var productRouter = require('./routes/product');
let fileuploadRouter= require('./routes/fileupload');
let authRouter= require('./routes/auth');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
db.sequelize.sync();
//db.sequelize.sync({force:true});

app.use('/employees', employeesRouter);
app.use('/customers', customersRouter);
app.use('/offices', officesRouter);
app.use('/orderdetails', orderdetailsRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentRouter);
app.use('/productlines', productlineRouter);
app.use('/products', productRouter);
app.use('/file',fileuploadRouter);
app.use('/login', authRouter);


module.exports = app;
