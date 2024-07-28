const asyncHandler = require("express-async-handler");
const Blogmodel = require("../Model/Blog");
const Usermodel = require("../Model/user");
const jwt = require("jsonwebtoken");

//create blog
const craeteblog = asyncHandler(async (req, res) => {
  try {
    const newblog = await Blogmodel.create(req.body);
    res.json({ success: true, message: "blog created successfully", newblog });
  } catch (err) {
    throw new Error(err);
  }
});

//update a blog bu it's id
const updateablog = asyncHandler(async (req, res) => {
  try {
    const updatedblog = await Blogmodel.findByIdAndUpdate(
      req.params.blogid,
      req.body
    );
    res.json({
      success: true,
      message: "blog updated successfully",
      updatedblog,
    });
  } catch (err) {
    throw new Error(err);
  }
});

//FIND blog by id
const findblogbyid = asyncHandler(async (req, res) => {
  try {
    const foundblog = await Blogmodel.findByIdAndUpdate(req.params.blogid, {
      $inc: { numViews: 1 },
    });
    res.json({
      success: true,
      message: "successfully found a blog",
      foundblog,
    });
  } catch (err) {
    throw new Error(err);
  }
});
//find all blogs
const findallblogs = asyncHandler(async (req, res) => {
  try {
    const allblogs = await Blogmodel.find();
    res.json({ success: true, message: "all blogs received successfully",allblogs });
  } catch (err) {
    throw new Error(err);
  }
});


//delete a blog

const Deleteblog = asyncHandler(async (req, res) => {
  try {
    const foundblog = await Blogmodel.findByIdAndDelete(req.params.blogid);
    res.json({
      success: true,
      message: "successfully deleted a blog",
      foundblog,
    });
  } catch (err) {
    throw new Error(err);
  }
});


//liking the blog
const likeblogs=asyncHandler(async(req,res)=>{
    const {blogid}=req.body;
    // console.log(blogid)
    try{

        const token=req.headers.authorization.split(" ")[1]
        const tokendata=jwt.decode(token)

        const blog=await Blogmodel.findById(blogid)
        const loginuserid=tokendata.userId
        const isLiked=blog?.isLiked
        const alreadyDisLiked=blog?.disLikes?.find((userId)=>userId?.toString()===loginuserid?.toString())
        if(alreadyDisLiked){
            const blog=await Blogmodel.findByIdAndUpdate(blogid,{
                $pull:{disLikes:loginuserid},
                isDisLiked:false,
               
            },{ new:true})
            res.json(blog)
        }
        if(isLiked){
            const blog=await Blogmodel.findByIdAndUpdate(blogid,{
                $pull:{Likes:loginuserid},
                isLiked:false
            },{
              new:true
            })
            res.json(blog)

        }
        else{
            const blog=await Blogmodel.findByIdAndUpdate(blogid,{
                $push:{Likes:loginuserid},
                isLiked:true
            },
            {new:true}

          )
            res.json(blog)
        }


    }
    catch(err){
        throw new Error(err)
    }
})


//disliking the blog
const disliking=asyncHandler(async(req,res)=>{
    const {blogid}=req.body;
    // console.log(blogid)
    try{

        const token=req.headers.authorization.split(" ")[1]
        const tokendata=jwt.decode(token)

        const blog=await Blogmodel.findById(blogid)
        const loginuserid=tokendata.userId
        const isDisLiked=blog?.isDisLiked
        const alreadyLiked=blog?.Likes?.find((userId)=>userId?.toString()===loginuserid?.toString())
        if(alreadyLiked){
            const blog=await Blogmodel.findByIdAndUpdate(blogid,{
                $pull:{Likes:loginuserid},
                isLiked:false,
               
            },{ new:true})
            res.json(blog)
        }
        if(isDisLiked){
            const blog=await Blogmodel.findByIdAndUpdate(blogid,{
                $pull:{disLikes:loginuserid},
                isDisLiked:false
            },{
              new:true
            })
            res.json(blog)

        }
        else{
            const blog=await Blogmodel.findByIdAndUpdate(blogid,{
                $push:{disLikes:loginuserid},
                isDisLiked:true
            },
            {new:true}

          )
            res.json(blog)
        }


    }
    catch(err){
        throw new Error(err)
    }
})

module.exports = { craeteblog, updateablog, findblogbyid, findallblogs,likeblogs,disliking,Deleteblog };
