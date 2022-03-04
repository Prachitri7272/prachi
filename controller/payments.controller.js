const db = require('../model/connection');
const payments = db.payments;
const customers= db.customers;
const Op = db.Sequelize.Op;
module.exports = {
        allpayments: (req, res) => {
            let pageNmber= req.body.pageNumber;//1
            let numberofRows=req.body.numberofRows;
            let offset = (pageNmber  -1)*numberofRows;
            let fetchrow=numberofRows;
            // payloyees.findAll({attributes:['id','name','email','mobile','isActive'],include: {model:offices,attributes:['id','offices_name']},offset:offset,limit:fetchrow}).then((result) => {
            //  res.send({ error: false, data: result });
            // })
            payments.findAndCountAll({attributes:['ID','paymentDate','Amount','isActive'],include: {model:customers,attributes:['Customer_Id','Customer_Name','City','Mobile_No']},offset:offset,limit:fetchrow}).then((result) => {
                res.send({ error: false, data: result });
            })
            .catch((err) => {
                res.send({ error: true, message: err.message });
            })
        },

    createpay: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.status(400).send({ erros: errors.array() });
        }else {
        const pay = {
           paymentDate: req.body.paymentDate,
            pay_email: req.body.pay_email,
            Amount: req.body.Amount,
            customerCustomerId: req.body.customerCustomerId
        };
        payments.create(pay).then((result) => {
            res.send({ error: false, message: "payment record created successfully" });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })

    }
    },

    findpay: (req, res) => {
        payments.findAll({ where:{ ID: req.body.ID }}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    deletepay: (req, res) => {
        payments.destroy({ where:{ ID: req.body.ID },truncate:false}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    updatepay:(req,res) =>{
        let id=req.body.ID;
        payments.update({isActive:false},{where:{ID:id}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"payments record updated"});
            }else{
                res.send({error:false, message:"payments record not updated"}); 
            }
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    }
   ///bulkCreate 
   ///findByPk(123)


}