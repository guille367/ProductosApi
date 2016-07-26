var express = require('express')
var routerProducts = express({
  mergeParams : true
})

var products = require('../models/products')

routerProducts.get('/products',function(req,res){
    products.get(function(err,data){
        if(!err)
            res.json(data)
        else
            console.log(err.message)
    })
})

routerProducts.post('/products',function(req,res){
    products.add(req.body,function(err,data){
        res.json(data)
    })
})

routerProducts.put('/products',function(req,res){
    products.update(req.body,function(err,data){
        res.json(data)
    })
})

routerProducts.delete('/products/:id',function(req,res){
    products.delete(req.params.id,function(err,data){
        res.json(data)
    })
})

module.exports = routerProducts