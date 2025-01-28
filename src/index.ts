import connectDb from "../config/connectToDb";
import express from "express";
import { errorHandler, notFound } from "../middlewares/error";
import cors from 'cors';

require('dotenv').config();
//calling the connection function
connectDb();


const app = express();

//call json and cors middlewares
app.use(express.json());
app.use(cors());

//call the routings 
app.use("/api/auth", require('../routes/AuthRoute'));
app.use("/api/post", require('../routes/PostRoute'));



//Error Handler Middleware 
app.use(notFound)
app.use(errorHandler)

//server starting
app.listen(process.env.PORT, () => {
    console.log(`Server Listening on Port ${process.env.PORT}`);
  });

