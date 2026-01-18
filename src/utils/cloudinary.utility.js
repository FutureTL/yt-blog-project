import {v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
})

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});



const uploadOnCloudinary = async(localPathOfImage) => {

    try {
        console.log("local image path from controller", localPathOfImage);
        console.log({
            cloud: process.env.CLOUDINARY_CLOUD_NAME,
            key: process.env.CLOUDINARY_API_KEY,
            secret: process.env.CLOUDINARY_API_SECRET ? "exists" : "missing"
        });

        const res = await cloudinary.uploader
        .upload(localPathOfImage, {
            resource_type: "image" 
        })

        console.log("file uploaded sucessfully to cloudinary", res);
        return res;
        
    } catch (error) {
        console.log("error in uploading the file to cloudinary", error);
        fs.unlinkSync(localPathOfImage);
    }
}

export default uploadOnCloudinary;