const db = require('../model/connection');
const bcrypt=require('bcrypt');
const { validationResult } = require('express-validator');
const employees = db.employees;
const offices= db.offices;
const Op = db.Sequelize.Op;
module.exports = {
        allemployees: (req, res) => {
            let pageNmber= req.body.pageNumber;//1
            let numberofRows=req.body.numberofRows;
            let offset = (pageNmber  -1)*numberofRows;
            let fetchrow=numberofRows;
            // employees.findAll({attributes:['id','name','email','mobile','isActive'],include: {model:offices,attributes:['id','offices_name']},offset:offset,limit:fetchrow}).then((result) => {
            //  res.send({ error: false, data: result });
            // })
            employees.findAndCountAll({attributes:['empID','emp_name','emp_email','mobile_no','emp_jobTitle','emp_password','isActive'],include: {model:offices,attributes:['Office_Id','City','Mobile_No']},offset:offset,limit:fetchrow}).then((result) => {
                res.send({ error: false, data: result });
            })
            .catch((err) => {
                res.send({ error: true, message: err.message });
            })
        },

    createEmp: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.status(400).send({ erros: errors.array() });
        }else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.emp_password, salt);

        const emp = {
            emp_name: req.body.emp_name,
            emp_email: req.body.emp_email,
            mobile_no: req.body.mobile_no,
            emp_jobTitle: req.body.emp_jobTitle,
            emp_password: hash,
            officeOfficesId: req.body.officeOfficesId
        };
        employees.create(emp).then((result) => {
            res.send({ error: false, message: "Employee created successfully" });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })

    }
    },

    findEmp: (req, res) => {
        employees.findAll({ where:{ empID: req.body.empID }}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    deleteEmp: (req, res) => {
        employees.destroy({ where:{ empID: req.body.empID },truncate:false}).then((result) => {
            res.send({ error: false, data: result });
        }).catch((err) => {
            res.send({ error: true, message: err.message });
        })
    },

    updateEmp:(req,res) =>{
        let empid=req.body.empID;
        employees.update({isActive:false},{where:{empID:empid}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"Employee record updated"});
            }else{
                res.send({error:false, message:"Employee record not updated"}); 
            }
        }).catch((err)=>{
            res.send({error:true, err:err});
        })
    }
   ///bulkCreate 
   ///findByPk(123)


}