const asyncHandler = require("express-async-handler");
const CuponModel = require("../Model/cupon");
//create coupon
const createcupon = asyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    const newcupon = await CuponModel.create(req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "cupon created successfully",
      newcupon,
    });
  } 
  catch (err) {
    throw new Error(err);
  }
});

//update coupon
const updatecupon=asyncHandler(async(req,res)=>{
  try{
    const updatedcoupon=await CuponModel.findByIdAndUpdate(req.params.cuponid,req.body,
        {new:true},

    )
    res.json({success:true,message:"cuopn updated successfully",updatedcoupon})
  }
  catch(err){
    throw new Error(err)
  }
})

//find coupon by id
const getcuponbyid=asyncHandler(async(req,res)=>{
  try{
    const foundcupon=await CuponModel.findByIdAndUpdate(req.params.cuponid

    )
    res.json({success:true,message:"got acuopn successfully",foundcupon})
  }
  catch(err){
    throw new Error(err)
  }
})


//delete coupon by id
const deletecupon=asyncHandler(async(req,res)=>{
  try{
    const deletedcupon=await CuponModel.findByIdAndDelete(req.params.cuponid

    )
    res.json({success:true,message:"cuopn deleted successfully",deletedcupon})
  }
  catch(err){
    throw new Error(err)
  }
})

//get all coupons
const getallcupons=asyncHandler(async(req,res)=>{
  try{
    const getallcupon=await CuponModel.find()
    res.json({success:true,message:"got all coupon",getallcupon})
  }
  catch(err){
    throw new Error(err)
  }
})
module.exports = { createcupon,updatecupon,getcuponbyid,deletecupon,getallcupons };
