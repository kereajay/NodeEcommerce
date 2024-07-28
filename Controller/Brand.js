const asyncHandler = require("express-async-handler");
const BrandModel=require('../Model/Brand')
const createBrand=asyncHandler(async(req,res)=>{
    try{
        const Brand=await BrandModel.create(req.body)
        res.json({success:true,message:"Brand created successfully",Brand})

    }catch(err){
        throw new Error(err)

    }

})

//update Brand by id

const updateBrand=asyncHandler(async(req,res)=>{
    try{
        const updatedBrand=await BrandModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({success:true,message:"Brand updated successfully",updatedBrand})

    }
    catch(err){
        throw new Error(err)

    }
})

//get Brand by id
const findBrandbyid=asyncHandler(async(req,res)=>{
    try{
        const Brandbyid=await BrandModel.findById(req.params.id)
        res.json({success:true,message:"found a Brand by it's id",Brandbyid})

    }
    catch(err){
        throw new Error(err)

    }
})

//get all Brand
const getallBrand=asyncHandler(async(req,res)=>{
    try{
        const allBrand=await BrandModel.find()
        res.json({success:true,message:"get all Brand",allBrand})

    }
    catch(err){
        throw new Error(err)

    }
})

//delete Brand by id
const deletebyid=asyncHandler(async(req,res)=>{
    try{
        const deletedBrandbyid=await BrandModel.findByIdAndDelete(req.params.id)
        res.json({success:true,message:"deleted successfully",deletedBrandbyid})

    }
    catch(err){
        throw new Error(err)

    }
})


module.exports={createBrand,updateBrand,findBrandbyid,getallBrand,deletebyid}