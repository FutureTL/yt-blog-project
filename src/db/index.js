import mongoose from 'mongoose';
import {db_name} from '../constants.js'

const connectDB = async () => {

    try {                                   // `mongodb_url/db_name`
       const connectionInstance=  await mongoose.connect(`${procces.env.MONGODB_URL}/${db_name}`)
       console.log("connection established", connectionInstance);
        
    } catch (error) {
        console.log("error in connecting with db", error);
        
    }
}

export default connectDB;