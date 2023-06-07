import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors"
import AuthRoute from './routes/route.js'


const app = express();
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors())
dotenv.config()

mongoose.connect(process.env.MONGODB,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    app.listen(process.env.Port,()=>{
        console.log('port 5000')
    })
}).catch((error)=>console.log(error))

app.use('/auth',AuthRoute) 