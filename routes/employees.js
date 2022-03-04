var express = require('express');
var router = express.Router();
const { body, check } = require('express-validator');
let employeescontroller =require('../controller/employees.controller');
/* GET employees listing. */
router.post('/',
[
    check('emp_name').notEmpty().withMessage("employee name is required").isAlpha('en-US', {ignore: '\s'}).withMessage("employee name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("employee name Length in between 2 to 150 char only"),
    body('mobile_no').notEmpty().withMessage("mobile number is required").isNumeric().withMessage("mobile number should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('emp_password').notEmpty().withMessage("employee password is required").isAlphanumeric().withMessage("employee password  should be in Alphanumeric"),
    body('emp_jobTitle').notEmpty().withMessage("Enter employee jobTitle").isAlpha('en-US', {ignore: '\s'}).withMessage("employee jobTitle should be in alpha"),
    body('emp_email').notEmpty().withMessage("employee email is required").isEmail().withMessage("Please enter valid employee email")
],
employeescontroller.allemployees);
router.post('/create',
[
    check('emp_name').notEmpty().withMessage("employee name is required").isAlpha('en-US', {ignore: '\s'}).withMessage("employee name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("employee name Length in between 2 to 150 char only"),
    body('mobile_no').notEmpty().withMessage("mobile number is required").isNumeric().withMessage("mobile number should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('emp_password').notEmpty().withMessage("employee password is required").isAlphanumeric().withMessage("employee password  should be in Alphanumeric"),
    body('emp_jobTitle').notEmpty().withMessage("Enter employee jobTitle").isAlpha('en-US', {ignore: '\s'}).withMessage("employee jobTitle should be in alpha"),
    body('emp_email').notEmpty().withMessage("employee email is required").isEmail().withMessage("Please enter valid employee email")
],
employeescontroller.createEmp);
router.post('/find',
[
    check('emp_name').notEmpty().withMessage("employee name is required").isAlpha('en-US', {ignore: '\s'}).withMessage("employee name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("employee name Length in between 2 to 150 char only"),
    body('mobile_no').notEmpty().withMessage("mobile number is required").isNumeric().withMessage("mobile number should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('emp_password').notEmpty().withMessage("employee password is required").isAlphanumeric().withMessage("employee password  should be in Alphanumeric"),
    body('emp_jobTitle').notEmpty().withMessage("Enter employee jobTitle").isAlpha('en-US', {ignore: '\s'}).withMessage("employee jobTitle should be in alpha"),
    body('emp_email').notEmpty().withMessage("employee email is required").isEmail().withMessage("Please enter valid employee email")
],
employeescontroller.findEmp);
router.post('/delete',employeescontroller.deleteEmp);
router.post('/update',[
    check('emp_name').notEmpty().withMessage("employee name is required").isAlpha('en-US', {ignore: '\s'}).withMessage("employee name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("employee name Length in between 2 to 150 char only"),
    body('mobile_no').notEmpty().withMessage("mobile number is required").isNumeric().withMessage("mobile number should be in number").isLength({ min: 10, max: 12 }).withMessage("Please enter a valid mobile number"),
    body('emp_password').notEmpty().withMessage("employee password is required").isAlphanumeric().withMessage("employee password  should be in Alphanumeric"),
    body('emp_jobTitle').notEmpty().withMessage("Enter employee jobTitle").isAlpha('en-US', {ignore: '\s'}).withMessage("employee jobTitle should be in alpha"),
    body('emp_email').notEmpty().withMessage("employee email is required").isEmail().withMessage("Please enter valid employee email")
],
employeescontroller.updateEmp);
module.exports = router;
