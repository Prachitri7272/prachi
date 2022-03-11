const db = require('../model/connection');
const productlines = db.productlines;
const Op = db.Sequelize.Op;
module.exports = {
        allproductlines: (req, res) => {
            let pageNmber= req.body.pageNumber;//1
            let numberofRows=req.body.numberofRows;
            let offset = (pageNmber  -1)*numberofRows;
            let fetchrow=numberofRows;
            // productlines.findAll({attributes:['id','name','email','mobile','isActive'],include: {model:offices,attributes:['id','offices_name']},offset:offset,limit:fetchrow}).then((result) => {
            //  res.send({ error: false, data: result });
            // })
            productlines.findAndCountAll({attributes:['productTypeID','productType','productImages','isActive'],offset:offset,limit:fetchrow}).then((result) => {
                res.send({ error: false, data: result });
            })
            .catch((err) => {
                res.send({ error: true, message: err.message });
            })
        },

    createproductline: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.status(400).send({ erros: errors.array() });
        }else {
            let productImages='';
            if(req.file){
            productImages=req.file.filename;
            }
        const productline = {
            productType: req.body.productType,
            productImages:req.body.productImages
            
        };
        productlines.create(productline).then((result) => {
            res.send({ error: false, message: "productline created successfully" });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    }

    },

    findproductline: (req, res) => {
        productlines.findAll({ where:{ productTypeID: req.body.productTypeID }}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    deleteproductline: (req, res) => {
        productlines.destroy({ where:{ productTypeID: req.body.productTypeID },truncate:false}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    updateproductline:(req,res) =>{
        let producttypeid=req.body.productTypeID ;
        productlines.update({isActive:false},{where:{productTypeID: producttypeid}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"Product line record updated"});
            }else{
                res.send({error:false, message:"Product line record not updated"}); 
            }
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    }
   ///bulkCreate 
   ///findByPk(123)


}