const mongoose = require("mongoose");

//POST 
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// post model
module.exports = mongoose.model("Post", postSchema);