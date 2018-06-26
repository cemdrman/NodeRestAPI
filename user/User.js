var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});


/*
    you’re binding the layout of the schema to the model which is named 'User' . 
    This is what you will be using to access the data in the database, 
    and that’s exactly why you are exporting it to use in other parts of your program.
*/
mongoose.model("User",userSchema);

module.exports = mongoose.model("User");