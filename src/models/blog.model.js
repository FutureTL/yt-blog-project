import mongoose from "mongoose";
//title- req,
//content-req,
//author(user)-req,

//user-blogs - one to many relation- one user can write multiple blogs
//blog-author- one to one
const blogSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }


}, {timestamps:true});

export const blogModel = mongoose.model('Blog', blogSchema);