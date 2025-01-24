import connectDb from "../config/connectToDb";
import express from "express";
import { errorHandler, notFound } from "../middlewares/error";
import cors from 'cors';

require('dotenv').config();
connectDb();


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", require('../routes/AuthRoute'));
app.use("/api/post", require('../routes/PostRoute'));



//Error Handler Middleware 
app.use(notFound)
app.use(errorHandler)

//server starting
app.listen(process.env.PORT, () => {
    console.log(`Server Listening on Port ${process.env.PORT}`);
  });

