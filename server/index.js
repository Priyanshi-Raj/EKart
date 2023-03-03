import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';


import connection from './database/db.js';
import Router from './routes/route.js';
import DefaultData from './default.js';
const app= express();
//app.use(cors());
dotenv.config();
const PORT =8000;
const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;
connection(USERNAME,PASSWORD);
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);


app.listen(PORT, ()=>console.log(`server is running successfully on PORT ${PORT}`));
DefaultData();
