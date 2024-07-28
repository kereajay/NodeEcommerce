const mongoose=require("mongoose")
const cartschema=new mongoose.Schema({
    products:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"products"
            },
            count:Number,
            color:String,
            price:Number
        }
    ],
    carttotal:Number,
    totalafterdiscount:Number,
    orderedby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userinfos"
    }
},{
    timestamps:true
})
const cartModel=mongoose.model("cart",cartschema)
module.exports=cartModel