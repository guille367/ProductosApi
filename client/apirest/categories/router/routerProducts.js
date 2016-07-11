var express = require('express')
var routerProducts = express()
var products = require('./models/products')

routerProducts.get('/products',function(req,res){
    products.get(function(err,data){
        if(!err)
            res.json(data)
        else
            console.log(err.message)
    })
})

routerProducts.post('/products',function(req,res){
    products.add(req.body)
})

routerProducts.put('/products',function(req,res){
    products.update(req.body)
})

routerProducts.delete('/products/:id',function(req,res){
    products.delete(req.params.id)
})

module.exports = routerProducts