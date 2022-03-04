const db = require('../model/connection');
const orderdetails = db.orderdetails;
const products= db.products;
const order= db.orders;
const Op = db.Sequelize.Op;
module.exports = {
        allorderdetails: (req, res) => {
            let pageNmber= req.body.pageNumber;//1
            let numberofRows=req.body.numberofRows;
            let offset = (pageNmber  -1)*numberofRows;
            let fetchrow=numberofRows;
            // orderdetails.findAll({attributes:['id','name','email','mobile','isActive'],include: {model:offices,attributes:['id','offices_name']},offset:offset,limit:fetchrow}).then((result) => {
            //  res.send({ error: false, data: result });
            // })
            orderdetails.findAndCountAll({attributes:['ID','quantityOrder','priceEach','isActive'],include: {model:products,attributes:['productId','productName','productType']},include: {model:order,attributes:['Order_Id','orderDate','Status']},offset:offset,limit:fetchrow}).then((result) => {
                res.send({ error: false, data: result });
            })
            .catch((err) => {
                res.send({ error: true, message: err.message });
            })
        },

    createorderdetails: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.status(400).send({ erros: errors.array() });
        }else {
        const order = {
            quantityOrder: req.body.quantityOrder,
            priceEach: req.body.priceEach,
            productProductId:req.body.productProductId,
            orderOrderId:req.body.orderOrderId
        };
        orderdetails.create(order).then((result) => {
            res.send({ error: false, message: "Order Details created successfully" });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })

    }
    },

    findorderdetails: (req, res) => {
        orderdetails.findAll({ where:{ ID: req.body.ID }}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    deleteorderdetails: (req, res) => {
        orderdetails.destroy({ where:{ ID: req.body.ID },truncate:false}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    updateorderdetails:(req,res) =>{
        let id=req.body.ID;
        order.update({isActive:false},{where:{ID:id}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"Order Details record updated"});
            }else{
                res.send({error:false, message:"Order Details record not updated"}); 
            }
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    }
   ///bulkCreate 
   ///findByPk(123)


}