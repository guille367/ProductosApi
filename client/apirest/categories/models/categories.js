var conn = require('./connection')
var DB_COLLECTION = 'categories'

exports.get = function (callback) {
  conn.connect(function(err,db){
    db.collection(DB_COLLECTION)
      .find({})
      .toArray(callback)
  })
}

exports.add = function (category) {
  conn.connect(function(err,db){
    db.collection(DB_COLLECTION)
      .insert(category)
  })
}

exports.delete = function (id) {
  
  var oid = conn.ObjectID(id)
  console.log('delete: ' + oid)
  conn.connect(function(err, db) {
      db.collection(DB_COLLECTION)
        .findOneAndDelete({ _id: oid })      
  })
}

exports.update = function(category){
  conn.connect(function(err, db) {
    
      var oid = conn.ObjectID(category._id)
      console.log(oid)
      db.collection(DB_COLLECTION)
        .updateOne( { _id: oid } , { $set: category }, { upsert: true })
  })
}