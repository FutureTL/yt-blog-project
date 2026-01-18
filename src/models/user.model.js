import mongoose from 'mongoose';
import { Schema } from 'mongoose';

//fullname- req, 
//username- req, unique,
//email- req, uni,
//password- req, uni,
//images-
//accessToken, refreshToken

// const userSchema = new mongoose.Schema({})
const userSchema = new Schema({

    fullname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String, //we will hash this password
        required:true,
        unique:true,
    },
    images:{
        type:String,  //cloudinary string
    },
    accessToken:{
        type:String,
    },
    refreshToken:{
        type:String,
    },
    blogs:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Blog',
    }

}, {timestamps:true});

export const userModel = mongoose.model('User', userSchema);

