const connection = require('../model/connection');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');

module.exports ={
    login:(req, res)=>{
       connection.query(`select * from employees where emp_email='${req.body.emp_email}'`,(err,result)=>{
         if(err){
             res.send({error:true, message:err.message});
         }else{
             const isSame=bcrypt.compareSync(req.body.emp_password,result[0].emp_password);
             if(isSame){
               const token=jwt.sign({empID:result[0].empID,empName:result[0].empName},'secret',{expiresIn:60*24*60*1000});
               
               res.send({error:false, token:token,message:"Loged IN"});
             }else{
                res.send({error:false, message:"invalid Username And Password"});
             }
         }
        })
    }
}
