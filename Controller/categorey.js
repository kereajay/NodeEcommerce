const CategoreyModel=require('../Model/categorey')
const asyncHandler = require("express-async-handler");
//create categorey
const createCategorey=asyncHandler(async(req,res)=>{
    try{
        const categorey=await CategoreyModel.create(req.body)
        res.json({success:true,message:"categorey created successfully",categorey})

    }catch(err){
        throw new Error(err)

    }

})

//update categorey by id

const updatecategorey=asyncHandler(async(req,res)=>{
    try{
        const updatedcategorey=await CategoreyModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({success:true,message:"categorey updated successfully",updatedcategorey})

    }
    catch(err){
        throw new Error(err)

    }
})

//get categorey by id
const findcategoreybyid=asyncHandler(async(req,res)=>{
    try{
        const categoreybyid=await CategoreyModel.findById(req.params.id)
        res.json({success:true,message:"found a categorey by it's id",categoreybyid})

    }
    catch(err){
        throw new Error(err)

    }
})

//get all categorey
const getallcategorey=asyncHandler(async(req,res)=>{
    try{
        const allcategorey=await CategoreyModel.find()
        res.json({success:true,message:"get all categorey",allcategorey})

    }
    catch(err){
        throw new Error(err)

    }
})

//delete categorey by id
const deletebyid=asyncHandler(async(req,res)=>{
    try{
        const deletedcategoreybyid=await CategoreyModel.findByIdAndDelete(req.params.id)
        res.json({success:true,message:"deleted successfully",deletedcategoreybyid})

    }
    catch(err){
        throw new Error(err)

    }
})


module.exports={createCategorey,updatecategorey,findcategoreybyid,getallcategorey,deletebyid}