import {v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async(localPathOfImage) => {

    try {
        const res = await cloudinary.uploader
        .upload(localPathOfImage)

        console.log("file uploaded sucessfully to cloudinary", res);
        return res;
        
    } catch (error) {
        console.log("error in uploading the file to cloudinary", err);
        fs.unlinkSync(localPathOfImage);
    }
}

export default uploadOnCloudinary;