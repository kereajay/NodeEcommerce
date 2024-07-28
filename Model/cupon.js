const mongoose=require('mongoose')
const cuponschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        uppercase:true
    },
    expiry:{
        type:String,
        required:true,

    },
    discount:{
        type:Number,
        required:true,
    }

},{
    timestamps:true
}) 
const CuponModel=mongoose.model("cupons",cuponschema)
module.exports=CuponModel