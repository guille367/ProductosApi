var mongo = require('mongodb')
var client = mongo.MongoClient
<<<<<<< HEAD
var dbURL = 'mongodb://' + process.env.IP + ':27017/productosapi'
=======
//var dbURL = 'mongodb://' + process.env.IP + ':27017/productosapi'
var dbURL = 'mongodb://localhost:27017/productosapi'
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
var db = null

exports.connect = function(callback){
  
  if(db){
    return process.nextTick(function(){
      callback(null, db);
    })
  }
  
  client.connect(dbURL, function(err, database){
    if(err){
      return callback(err);
    }
    db = database;
    callback(null, db);
  })

}

exports.ObjectID = function(hash){
  return new mongo.ObjectID(hash);
}