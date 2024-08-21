const http = require('http');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-products',(req,res,next)=>{
    res.send(`<form action="/products" method="POST"><input placeholder="Enter product" type="text" name="title"><input placeholder="Enter size" type="text" name="size"><button type="submit">Add Product</button></form>`)
})
app.post('/products',(req,res,next)=>{
    console.log(req.body)
    res.send("This is Product Page")
})
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello Express</h1>')
})
app.listen(4000)