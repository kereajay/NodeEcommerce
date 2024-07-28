const asyncHandler = require("express-async-handler");
const Usermodel = require("../Model/user");
const jwt=require("jsonwebtoken")
const isseller = asyncHandler(async (req, res, next) => {
  try{
    const token = req.headers.authorization.split(" ")[1];
    const tokendata = jwt.decode(token);
    const user=await Usermodel.findById(tokendata.userId)
    // console.log(user)
    if(user.role!="seller"){
        throw new Error("you are not a seller create product is only for user")
    }
    next()

  }
  catch(err){
    throw new Error(err)

  }
});
const isadmin = asyncHandler(async (req, res, next) => {
  try{
    const token = req.headers.authorization.split(" ")[1];
    const tokendata = jwt.decode(token);
    const user=await Usermodel.findById(tokendata.userId)
    // console.log(user)
    if(user.role!="Admin"){
        throw new Error("you are not a admin")
    }
    next()

  }
  catch(err){
    throw new Error(err)

  }
});
module.exports = { isseller,isadmin };
