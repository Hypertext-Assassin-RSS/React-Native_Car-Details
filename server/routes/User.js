const express = require('express')
const {json} = require('express')
const router = express.Router()
const mysql = require('mysql')

const server = express()
const db = require('../configs/db.configs')

server.use(express.json())

const connection = mysql.createConnection(db.database)

connection.connect(function (error){
    if(error){
        console.log('Error :',error)
    }else {
        console.log('MySQL Connected!')
        let userTable = 'Create table if not exists User(email VARCHAR(50),password VARCHAR(50))'
        connection.query(userTable,function(error,result){
            if(result.warningCount == 0){
                console.log('User Table Created')
            }
        })
    }
})


router.post('/',(req,res) => {
    const email = req.body.email
    const password = req.body.password

    let qury = 'INSERT INTO User(email,password) VALUES(?,?)'
    connection.query(qury,[email,password],function(error,result){
        if(error){
            console.log('Error :',error)
        }else{
            console.log(result)
            res.send({message:'Customer '+req.body.email + ' Saved'})
        }
    })
})

module.exports = router