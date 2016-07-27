var conn = require('./connection')
var DB_COLLECTION = 'categories'

exports.get = function (callback) {
  conn.connect(function(err,db){

    db.collection(DB_COLLECTION)
      .find({})
      .toArray(callback)
  })
}

exports.add = function (category,callback) {
  conn.connect(function(err,db){
    var collection = db.collection(DB_COLLECTION)
      collection.insertOne(category,callback)
    })
  }


exports.delete = function (id, callback) {
  var oid = conn.ObjectID(id)
  
  conn.connect(function(err, db) {

      db.collection(DB_COLLECTION)
        .findOneAndDelete({ _id: oid }, callback)      
  })
  
}

exports.update = function(category,callback){
  conn.connect(function(err, db) {
      var oid = conn.ObjectID(category._id)

      db.collection(DB_COLLECTION)
        .findOneAndUpdate( { _id: oid },
        { $set: { name: category.name, description: category.description } },
      { //  Options
        returnOriginal: false
      },callback)
        // QUE ONDA NO FUNCA MA CON EL CLOSE??
  })
}