import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
})
import connectDB from "./db/index.js";
import app from './app.js';


const port = process.env.PORT || 8000;
console.log("port from env", port);



connectDB()
.then(()=> {

    app.on('Error', (error)=>{
        console.log("error in connecting to server", error);
    })


    app.listen(port, ()=> {
        console.log("server connected on port", port );
    })
    

})
.catch((err)=> {
console.log("db connection failed", err)
});