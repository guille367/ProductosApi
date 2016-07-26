var express = require('express')
<<<<<<< HEAD
var routerProducts = express()
=======
var routerProducts = express({
  mergeParams : true
})

>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
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
<<<<<<< HEAD
    products.add(req.body)
})

routerProducts.put('/products',function(req,res){
    products.update(req.body)
})

routerProducts.delete('/products/:id',function(req,res){
    products.delete(req.params.id)
=======
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
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
})

module.exports = routerProducts