var express = require('express');
var router = express.Router();
const { body, check } = require('express-validator');
let productscontroller =require('../controller/products.controller');
/* GET products listing. */
router.post('/',
[
    check('productProduct Name').notEmpty().withMessage("Product Name is required").isAlpha().withMessage("Product Name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("Name Length in between 2 to 150 char only"),
    body('productType').notEmpty().withMessage("product Type is required").isAlphanumeric().withMessage("product Type  should be in Alphanumeric"),
    body('product Descrpiption').notEmpty().withMessage("product Descrpiption is required").isAlphanumeric().withMessage("product Descrpiption  should be in Alphanumeric"),
    
],
productscontroller.allproducts);
router.post('/create',
[
    check('Product Name').notEmpty().withMessage("Product Name is required").isAlpha().withMessage("Product Name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("Product Name Length in between 2 to 150 char only"),
    body('productType').notEmpty().withMessage("product Type is required").isAlphanumeric().withMessage("product Type  should be in Alphanumeric"),
    body('product Descrpiption').notEmpty().withMessage("product Descrpiptione is required").isAlphanumeric().withMessage("product Descrpiption  should be in Alphanumeric"),
    
],
productscontroller.createproduct);
router.post('/find',[
    check('Product Name').notEmpty().withMessage("Product Name is required").isAlpha().withMessage("Product Name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("Product Name Length in between 2 to 150 char only"),
    body('productType').notEmpty().withMessage("product Type is required").isAlphanumeric().withMessage("product Type  should be in Alphanumeric"),
    body('productDescrpiption').notEmpty().withMessage("product Descrpiption is required").isAlphanumeric().withMessage("product Descrpiption  should be in Alphanumeric"),
    
],
productscontroller.findproducts);
router.post('/delete',productscontroller.deleteproducts);
router.post('/update',[
    check('Product Name').notEmpty().withMessage("Product Name is required").isAlpha().withMessage("Product Name should be in alpha").isLength({ min: 2, max: 150 }).withMessage("Product Name Length in between 2 to 150 char only"),
    body('productType').notEmpty().withMessage("product Type is required").isAlphanumeric().withMessage("product Type  should be in Alphanumeric"),
    body('productDescrpiption').notEmpty().withMessage("product Descrpiption is required").isAlphanumeric().withMessage("product Descrpiption  should be in Alphanumeric"),
    
],productscontroller.updateproducts);
module.exports = router;