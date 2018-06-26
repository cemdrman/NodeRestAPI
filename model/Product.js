var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name: { type:String, required:true },
    image: { type:String, required:true },
    price : Number,
    productNumber: {type: Number, required: true, min:0}
});

mongoose.model("Product",productSchema);
module.exports = mongoose.model("Product");