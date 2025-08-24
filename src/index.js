//require("dotenv").config({path: "./.env" });--> this is enought but code is not lookin good
import dotenv from "dotenv";

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";---->not using them
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connectDB()

/*
import express from "express";

const app = express();

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("error",error)
            throw error;
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`server started at port ${process.env.PORT}`);
        })
    }
    
    catch(err){
        console.log("error",err)
        throw err;
    }
})()*/