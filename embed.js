const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//post - title, content02

const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Post = mongoose.model("Post", postSchema);

//user - email, name

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

const User = mongoose.model("User", userSchema);

// let newUser = new User({
//     email: "gohan@dbs.com",
//     name: "Son Gohan"
// });

// newUser.posts.push({
//     title: "how to fly",
//     content: "feel the power in your belly and focus and fly."
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

User.findOne({name: "Son Gohan"}, function(err, user){
    if(err){
        // console.log(err);
    } else {
        user.posts.push({
            title: "3 things i really like",
            content: "studying, food, famliy"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});

// let newPost = new Post({
//     title: "Reflections of dragons",
//     content: "Dragons are awsome."
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });