var router = express.Router({
  mergeParams : true
});

router.get('/',function(req,res) {
    // body...
    console.log(req)
})

var saludar = function(){
    console.log('ENTRÉ')
}

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

module.exports = router;
module.exports = saludar;