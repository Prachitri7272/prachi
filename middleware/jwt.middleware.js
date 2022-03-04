const jwt= require('jsonwebtoken');

module.exports={
    checkToken:(req,res,next)=>{
        const token=req.headers.token;
        if(token){
           jwt.verify(token,'secret',(err,decoded)=>{
                 if(err){
                     res.send({error:true, message:"Access denied"});
                 }else{
                     req.user=decoded;
                     
                     next();
                 }
           })
        }else{
            res.send({
                error:true,
                message:"Missing Token"
            })
        }
    }
}