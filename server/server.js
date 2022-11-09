const { application } = require('express');
const express = require('express')
const User = require('./routes/User')


const server = express();
const port = 4000

server.use(express.json())

server.use('/user',User)

server.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

server.listen(port, (req,res) =>{
    console.log('Server Running on Port :'+port)
})

server.get('/',(req,res) =>{
    res.send('Server Working !')
})


