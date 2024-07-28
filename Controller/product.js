const asyncHandler = require("express-async-handler");
const ProductModel = require("../Model/product");
const Usermodel = require("../Model/user");
const jwt=require("jsonwebtoken")

//create product
const createproduct = asyncHandler(async (req, res) => {
  try {
    const newproduct = await ProductModel.create(req.body);
    res.json({
      success: true,
      message: "product created successfully",
      newproduct,
    });
  } catch (err) {
    throw new Error(err);
  }
});

//get all products
const getallproducts = asyncHandler(async (req, res) => {
  try {
    const allproducts = await ProductModel.find();

    res.json({ success: true, message: "product get", allproducts });
  } catch (err) {
    throw new Error(err);
  }
});

const getproductbyid = asyncHandler(async (req, res) => {
  try {
    const productbyid = await ProductModel.findById(req.params.productid);
    res.json({ success: true, productbyid });
  } catch (err) {
    throw new Error(err);
  }
});
const updateproductbyid = asyncHandler(async (req, res) => {
  try {
    const updateproductbyid = await ProductModel.findByIdAndUpdate(
      req.params.productid,
      req.body
    );
    res.json({ success: true, updateproductbyid });
  } catch (err) {
    throw new Error(err);
  }
});

const addWishlist = asyncHandler(async (req, res) => {
  // console.log(req.body,req.headers)
  try {
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token)
    const tokendata = jwt.decode(token);
    // console.log(tokendata)
    const _id=tokendata.userId;
    const user = await Usermodel.findById(tokendata.userId);
    // console.log(user)
    const productid = req.body.productid;
    console.log(typeof productid)
    const alreadyadded = user.wishlist.find((id) => id.toString() === productid);
    // console.log(alreadyadded)
    if (alreadyadded) {
      const user = await Usermodel.findByIdAndUpdate(
        _id,
        {
           $pull: { wishlist: productid },
       },
        { new: true }
      );
      res.json(user);
    } else {
      const user = await Usermodel.findByIdAndUpdate(
        _id,
        { $push: { wishlist: productid } },
        { new: true }
      );
      res.json(user);
    }
  } 
  catch (err) {
    throw new Error(err);
  }
});

const productController = {
  getallproducts,
  createproduct,
  getproductbyid,
  updateproductbyid,
  addWishlist,
};
module.exports = productController;
