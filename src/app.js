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
app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/v1', indexRouter);

// connect to mongoDB
mongoose.connect(process.env.DB_MONGO, { useNewUrlParser: true, useUnifiedTopology: true }) // local
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoDB connected')
})

// var mongodUri = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds151943.mlab.com:51943/short_link`
// mongoose.connect(mongodUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

export default app;
