var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: { type:String, required:true },
    surname: { type:String, required:true },
    email: String,
    age: { type: Number, min: 18, max: 65 },
    password: {type: String, minlength:6, maxlength:10},
    createdDate : { type:Date, default: Date.now}
});


/*
    you’re binding the layout of the schema to the model which is named 'User' . 
    This is what you will be using to access the data in the database, 
    and that’s exactly why you are exporting it to use in other parts of your program.
*/
mongoose.model("User",userSchema);

module.exports = mongoose.model("User");