const mongoose=require('mongoose')
// const ProductModel=require('../Model/product')
const address={
    addressline1:{
        type:String,
        required:true
    },
    addressline2:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    pincode:{
        type:String,
        required:true
    },
}

const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobileNo:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
       
    },
    firstname:{
        type:String,
        required:true,
       
    },
    lastname:{
        type:String,
        required:true,
        default:"-"
       
    },
    address:{
        type:address,
        _id:false
    },
    token:{
        type:String,
        required:false,
        default:"",


    },
    role:{
        type:String,
        required:true,
        enum:["Customer","seller","Admin"]


    },
    cart:{
        type:Array,
        default:[],
    },
    wishlist:[
        {type:mongoose.Schema.Types.ObjectId,
            ref:"products",

        }
    ]
},{
    timestamps:true
})

const Usermodel=mongoose.model("userinfo",userschema)
module.exports=Usermodel