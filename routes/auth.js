var express = require('express');
var router = express.Router();
const {login}=require('../controller/auth.controller');
/* GET home page. */
router.post('/',login);

module.exports = router;



