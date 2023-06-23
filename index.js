import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import Route from './routes/route.js'
import bodyParser from 'body-parser';
import helmet from 'helmet';

const app=express();



app.use(
  helmet({
    crossOriginOpenerPolicy: true,
  })
);

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Route)


Connection();

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`server is running on port ${port} `));