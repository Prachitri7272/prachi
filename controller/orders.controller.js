const db = require('../model/connection');
const orders = db.orders;
const Customers= db.customers;
const Op = db.Sequelize.Op;
module.exports = {
        allorders: (req, res) => {
            let pageNmber= req.body.pageNumber;//1
            let numberofRows=req.body.numberofRows;
            let offset = (pageNmber  -1)*numberofRows;
            let fetchrow=numberofRows;
            orders.findAndCountAll({attributes:['Order_Id','orderDate','deliveryDate','shippedDate','Status','isActive'],include: {model:Customers,attributes:['Customer_Id','City','Mobile_No']},offset:offset,limit:fetchrow}).then((result) => {
                res.send({ error: false, data: result });
            })
            .catch((err) => {
                res.send({ error: true, message: err.message });
            })
        },

    createorders: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.status(400).send({ erros: errors.array() });
        }else {
        const order = {
            orderDate: req.body.orderDate,
            deliveryDate: req.body.deliveryDate,
            shippedDate: req.body.shippedDate,
            Status: req.body.Status,
            customerCustomerId:req.body.customerCustomerId

        };
        orders.create(order).then((result) => {
            res.send({ error: false, message: "Order record created successfully" });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })

    }
    },

    findorders: (req, res) => {
        orders.findAll({ where:{ ID: req.body.ID }}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    deleteorders: (req, res) => {
        orders.destroy({ where:{ ID: req.body.ID },truncate:false}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    updateorders:(req,res) =>{
        let id=req.body.ID;
        orders.update({isActive:false},{where:{ID:id}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"Orders record updated"});
            }else{
                res.send({error:false, message:"Orders record not updated"}); 
            }
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    }
   ///bulkCreate 
   ///findByPk(123)


}