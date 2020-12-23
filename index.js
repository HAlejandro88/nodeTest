const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/products',require('./routes/Products'));

const PORT = 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(`Server is running in port: ${PORT}`)
    }
});


module.exports = app;
