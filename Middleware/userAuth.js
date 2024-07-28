
const Usermodel=require('../Model/user')
const asyncHandler = require("express-async-handler");
const jwt=require("jsonwebtoken")
const authmiddleware=asyncHandler(async(req,res,next)=>{
  try {
      const bearertoken = req.headers.authorization;
  
      
      //is token present
      if (!bearertoken) {
        throw new Error("there is no token")
      }
  
  
      //token matching wheather it is same one or different
      const token = bearertoken.split(" ")[1];
      jwt.verify(token,"Ecommerce");
  
  
  
      //token data with expiry of token
      const tokendata = jwt.decode(token);
      // console.log(tokendata);
      const currenttimeinseconds = Math.floor(new Date().getTime() / 1000);
      if (currenttimeinseconds > tokendata.exp) {
       throw new Error("token is expired")
      }
  
      //not a user
      // const isvalidUser = await Usermodel.findById(tokendata.userId);
      // // console.log(isvalidUser)
      // if (!isvalidUser) {
      //  throw new Error("there is no user with this address")
      // }
      next()
    }        
    catch (err) {
     throw new Error("Invalid token unauthorised by err",err)
    }
  })
//   req.user=user;
 

module.exports=authmiddleware