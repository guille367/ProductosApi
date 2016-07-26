var express = require('express')
var routerCategories = express()
var categories = require('../models/categories')

routerCategories.get('/categories',function (req,res) {
  categories.get(function(err,data){
        res.json(data)
  })
})

routerCategories.post('/categories',function (req,res) {
  categories.add(req.body,function(err,data){
      res.json(data)
  })
})

routerCategories.put('/categories',function (req,res) {
  categories.update(req.body,function(err,data){
        res.json(data)
    })
})
  
routerCategories.delete('/categories/:id',function (req,res) {
  categories.delete(req.params.id,function(err,data){
        res.json(data)
    })
})

module.exports = routerCategories