var express = require('express')
var routerCategories = express()

routerCategories.get('/categories',function (req,res) {
  res.json({id:'asdasd',name:'bien pibe'})
})

routerCategories.post('/categories',function (req,res) {
  console.log(req.body)
})

routerCategories.put('/categories',function (req,res) {
  res.json({id:'asdasd',name:'bien pibe'})
})

routerCategories.delete('/categories',function (req,res) {
  res.json({id:'asdasd',name:'bien pibe'})
})

/*router.post('/', function(req, res){
  categorias.create(req.body, function(err, data){
    res.jsons(data);
  })
});

router.put('/', function(req, res){
  categorias.update(req.body, function(err, data){
    res.json(data);
  })
});

router.get('/', function(req, res){
  categorias.list(function(err, data){
    res.json(data);
  })
});

router.delete('/:id', function(req, res){
  categorias.delete(req.params.id, function(err, data){
    if(data){
      return res.json({
        error: false,
        msg : "categoria " + data.value.desc + " deleted"
      });
    }
    res.json({
      error : true,
      msg : "categoria not found"
    })
  })
});*/

module.exports = routerCategories;