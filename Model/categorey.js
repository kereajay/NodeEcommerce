const mongoose=require('mongoose')
const categoreyschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true


    }
},{
    timestamps:true
})
const CategoreyModel=mongoose.model("categorey",categoreyschema)
module.exports=CategoreyModel