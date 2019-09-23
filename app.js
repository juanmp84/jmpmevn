var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const bd = require('./bdmlab')
//const bd = require('./bd');
// var dotenv = require('dotenv');
// const mongoose = require('mongoose');

// require('dotenv').config();
// mongoose.connect(process.env.MONGODB)
//     .then(() => {
//         console.log('database connected')
//     })
//     .catch(() => {

//     })

var indexRouter = require('./routes/index');
var myroutes = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', myroutes);

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports = app;
