import mongoose from 'mongoose';
import {db_name} from '../constants.js'

const connectDB = async () => {

    try {                           
                // `mongodb_url/db_name`
       console.log("mongodb url", process.env.MONGODB_URL);
       const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
       console.log("connection established", connectionInstance.connection.host);
        
    } catch (error) {
        console.log("error in connecting with db", error);
        
    }
}

export default connectDB;