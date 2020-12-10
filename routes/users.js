const express = require('express');
const app = express.Router();

app.get('/', (req,res) => {
    return res.status(200).json({
        success: true,
        msg: 'all users send'
    })
})


app.get('/:id', (req,res) => {
    if (req.params.id === 'user1') {
        return res.status(200).json({
            success: true,
            msg: 'usuario encontrado'
        })
    } else {
        return res.status(404).json('usuario incorrecto')
    }
})


app.post('/',(req,res) =>{
    const { username, password } = req.body;
    if(username && password) {
        return res.status(201).json({
            success: true,
            msg: 'users created'
        })
    } else {
        return res.status(400).json({
            success: false,
            msg: 'users not created'
        })
    }
})


module.exports = app;
