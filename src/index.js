import connectDB from "./db/index.js";


connectDB()
.then(()=> {

    

})
.catch((err)=> {
console.log("db connection failed", err)
});