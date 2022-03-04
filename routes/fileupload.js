var express = require('express');
var router = express.Router();
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
/* GET home page. */
router.post('/upload',upload.single('profile'), (req, res, next) =>{
  res.send({ fileData: req.file.filename});
});

module.exports = router;