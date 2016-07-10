var express = require('express')
var routerCategories = express()
var categories = require('../models/categories')

routerCategories.get('/categories',function (req,res) {
  categories.get(function(err,data){
      if(!err)
        res.json(data)
      else  
        console.log(err.message)
  })
})

routerCategories.post('/categories',function (req,res) {
  categories.add(req.body)
})

routerCategories.put('/categories',function (req,res) {
  categories.update(req.body)
})
  
routerCategories.delete('/categories/:id',function (req,res) {
  categories.delete(req.params.id)
})

module.exports = routerCategories;