const express = require('express')

const router = express.Router();

router.get('/add-products',(req,res,next)=>{
    res.send(`<form action="/products" method="POST"><input placeholder="Enter product" type="text" name="title"><input placeholder="Enter size" type="text" name="size"><button type="submit">Add Product</button></form>`)
})
router.post('/products',(req,res,next)=>{
    console.log(req.body)
    res.send("This is Product Page")
})

module.exports = router