const mongoose=require("mongoose")
const orderschema=new mongoose.Schema({
    products:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"products"
            },
            count:Number,
            color:String
        }
    ],
    paymentintent:{},
    orderStatus:{
        type:String,
        default:"Not processed",
        enum:["Not processed","Cash on deliveary","Dispatched","Cancelled","Delivered"]
    },
    orderedby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userinfos"
    }
},{
    timestamps:true
})
const orderModel=mongoose.model("orders",orderschema)
module.exports=orderModel