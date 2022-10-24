const { application } = require('express');
const express = require('express')


const server = express();
const port = 4000

server.use(express.json())

server.listen(port, (req,res) =>{
    console.log('Server Running on Port :'+port)
})

server.get('/',(req,res) =>{
    res.send('Server Working !')
})