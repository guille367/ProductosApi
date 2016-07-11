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
  
  conn.connect(function(err, db) {
      db.open()
      db.collection(DB_COLLECTION)
        .findOneAndDelete({ _id: oid })      
  })
  
}

exports.update = function(category){
  conn.connect(function(err, db) {
      var oid = conn.ObjectID(category._id)
      console.log('update: ' + oid);
      db.collection(DB_COLLECTION)
        .findOneAndUpdate( { _id: oid },
        { $set: { name: category.name, description: category.description } },
        { upsert: true },function(){ db.close() } )
        // QUE ONDA NO FUNCA MA CON EL CLOSE??
  })
}