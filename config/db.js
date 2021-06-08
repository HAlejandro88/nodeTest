const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/hermes',{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false // remove mongoDB deprecation
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold, 'db');
    } catch (error) {
        console.error('Error en la conexion de la base de datos'.red);
    }
}


module.exports = connectDB;
