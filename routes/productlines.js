var express = require('express');
var router = express.Router();
const { body, check } = require('express-validator/check');
let productlinescontroller =require('../controller/productlines.controller');
const multer=require('multer');
// const upload=multer({ dest: 'uploads/'})
const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
      cb(null, 'uploads/')
    },
    filename:  (req, file, cb)=> {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+'.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
})
  
  const upload = multer({ storage: storage })

/* GET productlines listing. */
router.post('/',
[
    
    body('productType').notEmpty().withMessage("product Type is required").isAlphanumeric().withMessage("product Type  should be in Alphanumeric"),
    
],
productlinescontroller.allproductlines);
router.post('/create',upload.single('productImages'),
[
    
    body('productType').notEmpty().withMessage("product Type is required").isAlphanumeric().withMessage("product Type  should be in Alphanumeric"),
    
],
productlinescontroller.createproductline);
router.post('/find',
[
    
    body('productType').notEmpty().withMessage("product Type is required").isAlphanumeric().withMessage("product Type  should be in Alphanumeric"),
],
productlinescontroller.findproductline);
router.post('/delete',productlinescontroller.deleteproductline);
router.post('/update',
[
    
    body('productType').notEmpty().withMessage("product Type is required").isAlphanumeric().withMessage("product Type  should be in Alphanumeric"),
    
],
productlinescontroller.updateproductline);
module.exports = router;