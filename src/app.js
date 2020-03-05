// app.js
require('dotenv').config()
import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
const app = express();
const auth = require("./routes/auth");

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/v1', indexRouter);
app.use('/auth', auth);

// connect to mongoDB
// mongoose.connect(process.env.DB_MONGO, { useNewUrlParser: true, useUnifiedTopology: true }) // local
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoDB connected')
})

// var mongodUri = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds145790.mlab.com:45790/administrasi-klinik`
// mongoose.connect(mongodUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

const MONGOURI = "mongodb://akirasima:b1smill4h@ds157136.mlab.com:57136/akirasima";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useUnifiedTopology: true ,
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

InitiateMongoServer()


export default app;
