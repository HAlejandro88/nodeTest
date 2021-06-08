const mongoose =  require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number,
    top: Boolean
})


module.exports = mongoose.model('product', ProductsSchema)
