const express = require('express');
const app = express.Router();

const data = {
    products: [
        "potatoes",
        "apples",
        "cherry",
        "banana"
    ]
}

app.get('/', (req,res) => {
    return res.status(200).json({
        success: true,
        msg: 'all products send',
        products: data.products
    })
})

app.post('/',(req,res) => {
    const newProduct = req.body;
    data.products.push(newProduct);
    return res.status(201).json({
        success: true,
        msg: 'add new product',
        products: data.products
    })
})




module.exports = app;
