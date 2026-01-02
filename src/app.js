import express from 'express';

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



export default app;

