const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

const Post = require("./models/post");
const User = require("./models/user");




// User.create({
//     email: "sdfg@arfg.com",
//     name: "sdfg"
// });
//5acb045ced88060fbb87bd2b



// Post.create({
//     title: "stuff and stuff with stuff moooreee stuff",
//     content: "and things and things with things the maximum stuff"
// }, function(err, post){
//     User.findOne({ email: "sdfg@arfg.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

//find user
//find all posts for that user

// User.findOne({ email: "sdfg@arfg.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);     
//     }
// });






