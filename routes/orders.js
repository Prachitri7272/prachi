var express = require('express');
var router = express.Router();
const { body, check } = require('express-validator');
let orderscontroller =require('../controller/orders.controller');
/* GET orders listing. */
router.post('/',orderscontroller.allorders);
router.post('/create',
[
    check('Status').notEmpty().withMessage("Status is required").isAlpha().withMessage("Status should be in alpha").isLength({ min: 2, max: 150 }).withMessage("Status Length in between 2 to 150 char only"),
    body('orderDate').notEmpty().withMessage("Order Date is Required"),
    body('deliveryDate').notEmpty().withMessage("Delivery Date is Required"),
    body('shippedDate').notEmpty().withMessage("Shipped Date is Required"),
],
orderscontroller.createorders);
router.post('/find',
[
    check('Status').notEmpty().withMessage("Status is required").isAlpha().withMessage("Status should be in alpha").isLength({ min: 2, max: 150 }).withMessage("Status Length in between 2 to 150 char only"),
    body('orderDate').notEmpty().withMessage("orderDate can't be empty"),
    body('deliveryDate').notEmpty().withMessage("Delivery Date is Required"),
    body('shippedDate').notEmpty().withMessage("Shipped Date is Required"),
],
orderscontroller.findorders);
router.post('/delete',orderscontroller.deleteorders);
router.post('/update',
[
    check('Status').notEmpty().withMessage("Status is required").isAlpha().withMessage("Status should be in alpha").isLength({ min: 2, max: 150 }).withMessage("Status Length in between 2 to 150 char only"),
    body('orderDate').notEmpty().withMessage("orderDate can't be empty"),
    body('deliveryDate').notEmpty().withMessage("Delivery Date is Required"),
    body('shippedDate').notEmpty().withMessage("Shipped Date is Required"),
],
orderscontroller.updateorders);
module.exports = router;