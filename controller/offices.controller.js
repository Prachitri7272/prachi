const db = require('../model/connection');
const offices = db.offices;
const Op = db.Sequelize.Op;
module.exports = {
        alloffices: (req, res) => {
            let pageNmber= req.body.pageNumber;//1
            let numberofRows=req.body.numberofRows;
            let offset = (pageNmber  -1)*numberofRows;
            let fetchrow=numberofRows;
            // offices.findAll({attributes:['id','name','email','mobile','isActive'],include: {model:offices,attributes:['id','offices_name']},offset:offset,limit:fetchrow}).then((result) => {
            //  res.send({ error: false, data: result });
            // })
            offices.findAndCountAll({attributes:['Office_Id','City','Mobile_No','State','Address','isActive'],offset:offset,limit:fetchrow}).then((result) => {
                res.send({ error: false, data: result });
            })
            .catch((err) => {
                res.send({ error: true, message: err.message });
            })
        },

    createOffices: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.status(400).send({ erros: errors.array() });
        }else {
        const offices = {
            City: req.body.City,
            mobile: req.body.mobile,
            State: req.body.State,
            Address: req.body.Address,
        };
        offices.create(offices).then((result) => {
            res.send({ error: false, message: "Offices Record created successfully" });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })

    }
    },

    findOffices: (req, res) => {
        offices.findAll({ where:{ Office_Id: req.body.Office_Id }}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    deleteOffices: (req, res) => {
        offices.destroy({ where:{ Office_Id: req.body.Office_Id },truncate:false}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    updateOffices:(req,res) =>{
        let officeid=req.body.Office_Id;
        offices.update({isActive:false},{where:{Office_Id:officeid}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"Office record updated"});
            }else{
                res.send({error:false, message:"Office record not updated"}); 
            }
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    }
   ///bulkCreate 
   ///findByPk(123)


}