//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http')
var path = require('path')

var express = require('express')

var router = express()
var server = http.createServer(router)

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://"+ process.env.IP +":27017/categories",function(error,db){
        if(!error){
         console.log("We are connected");   
        }
        else{
         console.log(error); //failed to connect to [127.4.68.129:8080]               
        }
})

router.use(express.static(path.resolve(__dirname)))

router.use('/categorias', function(req,res) {
    console.log('aquiestoy')
    MongoClient.connect("mongodb://"+ process.env.IP +":27017/categories",function(error,db){
        if(!error){
         var collection = db.collection('categories');
         collection.find({}).toArray(function (err,d) {
             res.json(d)
         })
        }
        else{
         console.log(error) //failed to connect to [127.4.68.129:8080]               
        }
        
        })

})

server.listen(process.env.PORT || 3000, process.env.IP , function(){
  var addr = server.address()
  
  console.log('Server listening at port: 3000')
})