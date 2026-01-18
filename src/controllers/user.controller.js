import { userModel } from "../models/user.model.js";
import uploadOnCloudinary from "../utils/cloudinary.utility.js";
import ApiResponse from "../utils/apiResponse.utility.js";
import { networkInterfaces } from "os";


export const registerUser =  async(req, res, next)=> {

   try {
            //logic-register
            //1. we will get a request from frontend- username, fullname, email, password, image?
            //2. validate -none of these should be empty
            //3. email/username- unique ------
            //----passowrd hash---------
            //4. image? - multer fetch-> cloudinary store.
            //5. db create user

            //req.body and req.files

        const {username, fullname, email, password } = req.body;

        //    if(!username || !fullname || !email || !password){
        //     throw new Error("all fields are necessary");
        //    }

            if(!username){
                throw new Error("username is required");
            }
            if(!fullname){
                throw new Error("username is required");
            }
            if(!email){
                throw new Error("username is required");
            }
            if(!password){
                throw new Error("username is required");
            }
            
            //email- do we have another user with the same email in our sysytem?
            const userMatch = await userModel.findOne({
                $or: [{email}, {username}]
            })

            if(userMatch){
                throw new Error("This email/username already exists. Please you a different one");
            }

            const imageLocalPath = req.files?.avatar[0]?.path;
            console.log("local image path", imageLocalPath);
            //local path of image provided by multer
            if(!imageLocalPath){
                throw new Error("local image path is not avaialble", imageLocalPath);
            }
            //upload to cloudinary:
            const imagePathFromCloudinary = await uploadOnCloudinary(imageLocalPath);

            console.log("image path from cloudinary", imagePathFromCloudinary);

            if(!imagePathFromCloudinary){
                throw new Error("image path from cloudinary not available", imagePathFromCloudinary);
            }

            const createdUser = await userModel.create({
                username,
                email,
                password,
                fullname,
                images: imagePathFromCloudinary.url,
            })
            //_id,
            //username, email, fullname,image, password, accessToken, refreshToken

            if(!createdUser){
                throw new Error("user not created in db", createdUser);
            }
            //_id
            const user = await userModel.findById(createdUser._id).select("-accessToken -refreshToken");

            //we will return them as a response.
            return res.status(201).json(
                new ApiResponse(
                    200,
                    "user successfully registered",
                    user,
                )
            )
    
   } catch (error) {

            console.log("error in registering the user", error); 
   }

}

