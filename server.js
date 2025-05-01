import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from 'cors';

dotenv.config();

connectDB();


//rest object
const app = express()


//middlewares

app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


//routes

app.use('/api/v1/auth',authRoutes);
//rest api
app.get('/',(req,res)=>{
    res.send(`<h1>welcome to the ecommerce app </h1>`);
});

const port = process.env.port || 8080 ;

app.listen(port,(req,res)=>{
    console.log(`server is running on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white);
})