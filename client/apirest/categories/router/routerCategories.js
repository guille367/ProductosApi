var express = require('express')
var routerCategories = express()
var categories = require('../models/categories')

routerCategories.get('/categories',function (req,res) {
  categories.get(function(err,data){
<<<<<<< HEAD
      if(!err){
        console.log('termino get')
        res.json(data)
      }
      else  
        console.log(err.message)
=======
        res.json(data)
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
  })
})

routerCategories.post('/categories',function (req,res) {
<<<<<<< HEAD
  categories.add(req.body)
})

routerCategories.put('/categories',function (req,res) {
  categories.update(req.body)
})
  
routerCategories.delete('/categories/:id',function (req,res) {
  categories.delete(req.params.id)
=======
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
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
})

module.exports = routerCategories