const mongoose=require('mongoose')
const brandschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true


    }
},{
    timestamps:true
})
const BrandModel=mongoose.model("Brands",brandschema)
module.exports=BrandModel