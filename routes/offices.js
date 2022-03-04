var express = require('express');
var router = express.Router();
const { body, check } = require('express-validator');
let officescontroller =require('../controller/offices.controller');
/* GET offices listing. */
router.post('/',
[
    check('City').notEmpty().withMessage("City is required").isAlpha().withMessage("City should be in alpha").isLength({ min: 2, max: 150 }).withMessage("City Length in between 2 to 150 char only"),
    body('Mobile_No').notEmpty().withMessage("Mobile_No is required").isNumeric().withMessage("Mobile_No should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('State').notEmpty().withMessage("State can't be empty").isAlpha().withMessage("State should be in alpha"),
    body('Address').notEmpty().withMessage("Address is required").isLength({ min: 2, max: 200 }).withMessage("Name Length in between 2 to 200 char only"),
],
officescontroller.alloffices);
router.post('/create',
[
    check('City').notEmpty().withMessage("City is required").isAlpha().withMessage("City should be in alpha").isLength({ min: 2, max: 150 }).withMessage("City Length in between 2 to 150 char only"),
    body('Mobile_No').notEmpty().withMessage("Mobile_No is required").isNumeric().withMessage("Mobile_No should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('State').notEmpty().withMessage("State can't be empty").isAlpha().withMessage("State should be in alpha"),
    body('Address').notEmpty().withMessage("Address is required").isLength({ min: 2, max: 200 }).withMessage("Name Length in between 2 to 200 char only"),
],
officescontroller.createOffices);
router.post('/find',
[
    check('City').notEmpty().withMessage("City is required").isAlpha().withMessage("City should be in alpha").isLength({ min: 2, max: 150 }).withMessage("City Length in between 2 to 150 char only"),
    body('Mobile_No').notEmpty().withMessage("Mobile_No is required").isNumeric().withMessage("Mobile_No should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('State').notEmpty().withMessage("State can't be empty").isAlpha().withMessage("State should be in alpha"),
    body('Address').notEmpty().withMessage("Address is required").isLength({ min: 2, max: 200 }).withMessage("Name Length in between 2 to 200 char only"),
],
officescontroller.findOffices);
router.post('/delete',officescontroller.deleteOffices);
router.post('/update',[
    check('City').notEmpty().withMessage("City is required").isAlpha().withMessage("City should be in alpha").isLength({ min: 2, max: 150 }).withMessage("City Length in between 2 to 150 char only"),
    body('Mobile_No').notEmpty().withMessage("Mobile_No is required").isNumeric().withMessage("Mobile_No should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('State').notEmpty().withMessage("State can't be empty").isAlpha().withMessage("State should be in alpha"),
    body('Address').notEmpty().withMessage("Address is required").isLength({ min: 2, max: 200 }).withMessage("Name Length in between 2 to 200 char only"),
],
officescontroller.updateOffices);
module.exports = router;