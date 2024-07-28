

const mongoose=require("mongoose")
const blogschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    categorey:{
        type:String,
        required:true
    },
    numViews:{
        type:Number,
        default:0
    },
    isLiked:{
        type:Boolean,
        default:false
    },
    isDisLiked:{
        type:Boolean,
        default:false
    },
    Likes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usermodel"
    },
    disLikes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usermodel"
    },
    image:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/11/06/13/25/blog-1027861_640.jpg"
    },
    Author:{
        type:String,
        default:"Admin"
    }
},{
    toJson:{
        Virtuala:true
    },
    toObject:{
        Virtuala:true
    },
    timestamps:true,
})
const Blogmodel=mongoose.model("blogs",blogschema)
module.exports=Blogmodel