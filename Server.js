const http = require('http');
const express = require('express')
const app = express()
app.use((req,res,next)=>{
    console.log("inside middleware")
    next()
})
app.use((req,res,next)=>{
    console.log("inside second middleware")
    res.send('<h1>Hello Express</h1>')
})
const server = http.createServer(app)

server.listen(4000, ()=>console.log("server listening 4000"));