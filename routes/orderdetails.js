var express = require('express');
var router = express.Router();
const { body, check } = require('express-validator');
let orderdetailscontroller =require('../controller/orderdetails.controller');
/* GET orderdetails listing. */
router.post('/',
[
    
    body('priceEach').notEmpty().withMessage("priceEach is required").isNumeric().withMessage("priceEach should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid price"),
    body('quantityOrder').notEmpty().withMessage("quantityOrder is required").isAlphanumeric().withMessage("quantityOrder  should be in Alphanumeric"),
    
],
orderdetailscontroller.allorderdetails);
router.post('/create',[
    
    body('priceEach').notEmpty().withMessage("price Each is required").isNumeric().withMessage("priceEach should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid price"),
    body('quantityOrder').notEmpty().withMessage("quantityOrder is required").isAlphanumeric().withMessage("quantityOrder  should be in Alphanumeric"),
    
],
orderdetailscontroller.createorderdetails);
router.post('/find',
[
    
    body('priceEach').notEmpty().withMessage("priceEach is required").isNumeric().withMessage("priceEach should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid price"),
    body('quantityOrder').notEmpty().withMessage("quantityOrder is required").isAlphanumeric().withMessage("quantityOrder  should be in Alphanumeric"),
    
],
orderdetailscontroller.findorderdetails);
router.post('/delete',orderdetailscontroller.deleteorderdetails);
router.post('/update',
[
    
    body('priceEach').notEmpty().withMessage("priceEach is required").isNumeric().withMessage("priceEach should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid price"),
    body('quantityOrder').notEmpty().withMessage("quantityOrder is required").isAlphanumeric().withMessage("quantityOrder  should be in Alphanumeric"),
    
],
orderdetailscontroller.updateorderdetails);
module.exports = router;