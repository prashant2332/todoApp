const jwt=require('jsonwebtoken')

module.exports=async function(req,res,next){
    const token=req.header('Authorization')

    if(!token){
       
        return  res.status(401).json({
            msg:'No token, Authorization Denied'
        })
    }

    try {
        await jwt.verify(token,process.env.jwtUserSecret,(err,decoded)=>{
            if(err){
                res.status(401).json({
                    msg:'Token not valid'
                });
            }
            else{
                req.user=decoded.user
                next()
            }
        
        })
    }
     catch (error) {
        console.log("something went wrong with middleware "+error)
        res.status(500).json({
            msg:'Server error'
        })
        
    }
}