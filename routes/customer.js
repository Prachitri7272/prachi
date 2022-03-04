var express = require('express');
var router = express.Router();
const { body, check } = require('express-validator');
let customerscontroller =require('../controller/customers.controller');
/* GET customers listing. */
router.post('/',
[
    check('Customer_name').notEmpty().withMessage("Customer_name is required").isAlpha().withMessage("Customer_name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("Customer_name Length in between 2 to 150 char only"),
    body('Mobile_No').notEmpty().withMessage("Mobile_No is required").isNumeric().withMessage("Mobile_No should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('Address').notEmpty().withMessage("Address is required").isLength({ min: 2, max: 200 }).withMessage("Name Length in between 2 to 200 char only"),
    body('City').notEmpty().withMessage("City is required"),
    body('State').notEmpty().withMessage("State is required")
],
customerscontroller.allcustomers);
router.post('/create',
[
    check('Customer_name').notEmpty().withMessage("Customer_name is required").isAlpha().withMessage("Customer_name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("Customer_name Length in between 2 to 150 char only"),
    body('Mobile_No').notEmpty().withMessage("Mobile_No is required").isNumeric().withMessage("Mobile_No should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('Address').notEmpty().withMessage("Address is required").isLength({ min: 2, max: 200 }).withMessage("Name Length in between 2 to 200 char only"),
    body('City').notEmpty().withMessage("City is required"),
    body('State').notEmpty().withMessage("State is required")
],
customerscontroller.createCustomer);
router.post('/find',
[
    check('Customer_name').notEmpty().withMessage("Customer_name is required").isAlpha().withMessage("Customer_name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("Customer_name Length in between 2 to 150 char only"),
    body('Mobile_No').notEmpty().withMessage("Mobile_No is required").isNumeric().withMessage("Mobile_No should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('Address').notEmpty().withMessage("Address is required").isLength({ min: 2, max: 200 }).withMessage("Name Length in between 2 to 200 char only"),
    body('City').notEmpty().withMessage("City is required"),
    body('State').notEmpty().withMessage("State is required")
],
customerscontroller.findCustomer);
router.post('/delete',customerscontroller.deleteCustomer);
router.post('/update',
[
    check('Customer_name').notEmpty().withMessage("Customer_name is required").isAlpha().withMessage("Customer_name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("Customer_name Length in between 2 to 150 char only"),
    body('Mobile_No').notEmpty().withMessage("Mobile_No is required").isNumeric().withMessage("Mobile_No should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('Address').notEmpty().withMessage("Address is required").isLength({ min: 2, max: 200 }).withMessage("Name Length in between 2 to 200 char only"),
    body('City').notEmpty().withMessage("City is required"),
    body('State').notEmpty().withMessage("State is required")
],
customerscontroller.updateCustomer);
module.exports = router;