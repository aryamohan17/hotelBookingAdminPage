const express = require('express')
const logic = require('./service/dataservice') 
const server = express()
const cors = require('cors')
server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())
server.listen(8080,()=>{
    console.log("server start at 8080");
})

server.get('/getAllData',(req,res)=>{
    logic.allHotel().then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/addHotel',(req,res)=>{
    logic.addHotel(req.body.id,req.body.image,req.body.name,req.body.place,req.body.rate,req.body.description).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.get('/getHotel/:id',(req,res)=>{
    logic.getHotel(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/editHotel',(req,res)=>{
    logic.editHotel(req.body.id,req.body.image,req.body.name,req.body.place,req.body.rate,req.body.description).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.delete('/deleteUser/:id',(req,res)=>{
    logic.deleteHotel(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/register',(req,res)=>{
    logic.register(req.body.username,req.body.password,req.body.Email).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/login',(req,res)=>{
    logic.login(req.body.Email,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/registerUser',(req,res)=>{
    logic.registerUser(req.body.email,req.body.username,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/loginuser',(req,res)=>{
    logic.loginuser(req.body.email,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
    })
})