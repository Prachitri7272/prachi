var express = require('express');
var router = express.Router();
const { body, check } = require('express-validator');
let paymentscontroller =require('../controller/payments.controller');
/* GET payments listing. */
router.post('/',
[
    
    body('Amount').notEmpty().withMessage("Enter Amount").isNumeric().withMessage("Amount should be in Numeric"),
    body('paymentDate').notEmpty().withMessage("paymentDate is required")
],
paymentscontroller.allpayments);
router.post('/create',
[
    
    body('Amount').notEmpty().withMessage("Enter Amount").isNumeric().withMessage("Amount should be in Numeric"),
    body('paymentDate').notEmpty().withMessage("paymentDate is required")
],
paymentscontroller.createpay);
router.post('/find',
[
    
    body('Amount').notEmpty().withMessage("Enter Amount").isNumeric().withMessage("Amount should be in Numeric"),
    body('paymentDate').notEmpty().withMessage("paymentDate is required")
],
paymentscontroller.findpay);
router.post('/delete',paymentscontroller.deletepay);
router.post('/update',
[
    
    body('Amount').notEmpty().withMessage("Enter Amount").isNumeric().withMessage("Amount should be in Numeric"),
    body('paymentDate').notEmpty().withMessage("paymentDate is required")
],
paymentscontroller.updatepay);
module.exports = router;