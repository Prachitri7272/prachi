const db = require('../model/connection');
const products = db.products;
const productline= db.productlines;
const Op = db.Sequelize.Op;
module.exports = {
        allproducts: (req, res) => {
            let pageNmber= req.body.pageNumber;//1
            let numberofRows=req.body.numberofRows;
            let offset = (pageNmber  -1)*numberofRows;
            let fetchrow=numberofRows;
            // products.findAll({attributes:['id','name','email','mobile','isActive'],include: {model:offices,attributes:['id','offices_name']},offset:offset,limit:fetchrow}).then((result) => {
            //  res.send({ error: false, data: result });
            // })
            products.findAndCountAll({attributes:['productId','productName','productType','productDescrpiption','isActive'],include: {model:productline, attributes:['productTypeID','productType','productimages']},offset:offset,limit:fetchrow}).then((result) => {
                res.send({ error: false, data: result });
            })
            .catch((err) => {
                res.send({ error: true, message: err.message });
            })
        },

    createproduct: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.status(400).send({ erros: errors.array() });
        }else {
        const products= {
            productName: req.body.productName,
            productType: req.body.productType,
            productDescription: req.body.productDescription,
            productlineProductTypeID: req.body.productlineProductTypeID
        };
        products.create(products).then((result) => {
            res.send({ error: false, message: "Products has been created successfully" });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })

    }
    },

    findproducts: (req, res) => {
        products.findAll({ where:{ productsId: req.body.productsId }}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    deleteproducts: (req, res) => {
        products.destroy({ where:{ productId: req.body.productId },truncate:false}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    updateproducts:(req,res) =>{
        let productId=req.body.productId;
        products.update({isActive:false},{where:{productId:productId}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"Product records has updated"});
            }else{
                res.send({error:false, message:"Product record not updated"}); 
            }
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    }
   ///bulkCreate 
   ///findByPk(123)


}