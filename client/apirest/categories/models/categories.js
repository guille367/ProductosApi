var conn = require('./connection')
var DB_COLLECTION = 'categories'

exports.get = function (callback) {
  conn.connect(function(err,db){
<<<<<<< HEAD
    
    console.log('Getteo duro')
    
=======
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
    db.collection(DB_COLLECTION)
      .find({})
      .toArray(callback)
  })
}

<<<<<<< HEAD
exports.add = function (category) {
  conn.connect(function(err,db){
    
    console.log('Add: ' + category.name)
    
    db.collection(DB_COLLECTION)
      .insert(category)
  })
}
=======
exports.add = function (category,callback) {
  conn.connect(function(err,db){
    var collection = db.collection(DB_COLLECTION)
      collection.insertOne(category,callback)
    })
  }



>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7

exports.delete = function (id) {
  var oid = conn.ObjectID(id)
  
  conn.connect(function(err, db) {
<<<<<<< HEAD
    
      console.log('Delete: ' + id)
      
=======
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
      db.collection(DB_COLLECTION)
        .findOneAndDelete({ _id: oid })      
  })
  
}

exports.update = function(category){
  conn.connect(function(err, db) {
      var oid = conn.ObjectID(category._id)
<<<<<<< HEAD
      
      console.log('update: ' + oid);
      
=======
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
      db.collection(DB_COLLECTION)
        .findOneAndUpdate( { _id: oid },
        { $set: { name: category.name, description: category.description } },
        { returnOriginal: false },function(err,c){ console.log("termine de updatear: " + c.name) })
        // QUE ONDA NO FUNCA MA CON EL CLOSE??
  })
}