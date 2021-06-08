const express = require('express');
const Product = require('../models/Product.model');
const app = express.Router();


app.get('/', async (req,res) => {
    const product = await Product.find();
    return res.status(200).json({
        success: true,
        msg: 'all products send',
        products: product
    })
})

app.post('/',async (req,res) => {
    const product = await Product.create(req.body)
    return res.status(201).json({
        success: true,
        msg: 'add new product',
        products: product
    })
})




module.exports = app;
