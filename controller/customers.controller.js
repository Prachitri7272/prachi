const db = require('../model/connection');
const customers = db.customers;
const Op = db.Sequelize.Op;
module.exports = {
        allcustomers: (req, res) => {
            let pageNmber= req.body.pageNumber;//1
            let numberofRows=req.body.numberofRows;
            let offset = (pageNmber  -1)*numberofRows;
            let fetchrow=numberofRows;
            // customers.findAll({attributes:['id','name','email','mobile','isActive'],include: {model:offices,attributes:['id','offices_name']},offset:offset,limit:fetchrow}).then((result) => {
            //  res.send({ error: false, data: result });
            // })
            customers.findAndCountAll({attributes:['Customer_Id','Customer_name','Mobile_No','Address','City','State','isActive'],offset:offset,limit:fetchrow}).then((result) => {
                res.send({ error: false, data: result });
            })
            .catch((err) => {
                res.send({ error: true, message: err.message });
            })
        },

    createCustomer: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.status(400).send({ erros: errors.array() });
        }else {
        const cust = {
            Customer_name: req.body.Customer_name,
            mobile: req.body.mobile,
            Address: req.body.Address,
            City: req.body.City,
            State: req.body.State,
        };
        customers.create(cust).then((result) => {
            res.send({ error: false, message: "Customer created successfully" });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })

    }
    },

    findCustomer: (req, res) => {
        customers.findAll({ where:{ Customer_Id: req.body.Customer_Id }}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    deleteCustomer: (req, res) => {
        customers.destroy({ where:{ Customer_Id: req.body.Customer_Id },truncate:false}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    updateCustomer:(req,res) =>{
        let customerid=req.body.customer_Id;
        customers.update({isActive:false},{where:{Customer_Id:customerid}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"Customer record updated"});
            }else{
                res.send({error:false, message:"Customer record not updated"}); 
            }
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    }
   ///bulkCreate 
   ///findByPk(123)


}