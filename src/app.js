import express from 'express';
import cors from 'cors';

const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

//to accept user data- accept it in json format and urlencoded form.
app.use(express.json({
    limit: '16kb'
}))

app.use(express.urlencoded({
    extended: true,
    limit: '16kb',
}))

app.use(express.static("public"));
//to accept static files.

//importing routes
import router from './routes/user.route.js';

//http://localhost:3000/v1/user/register - for register route.
app.use('/v1/user', router);

export default app;

