const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const Dotenv = require('dotenv');
const connectDB = require('./config/db');
const mongoose = require('mongoose')

Dotenv.config({path: './config/config.env' });


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(() => {
    console.log('base de Datos: \x1b[32m%s\x1b[0m', 'online');
}).catch((error) => console.log(error));

const app = express();



app.use(express.json());

app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/products',require('./routes/Products'));

const PORT = process.env.PORT || 5000;

const server = app.listen(5000, () => {console.log('server is runnning')});


module.exports = {app, server};
