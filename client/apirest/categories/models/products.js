var conn = require('./connection')
var DB_COLLECTION = 'products'

exports.get = function(callback){
    conn.connect(function(err,db){
        db.collection(DB_COLLECTION)
            .find()
            .toArray(callback)
    })
}

exports.add = function(product){
    conn.connect(function(err,db){
        db.collection(DB_COLLECTION)
            .insert(product)
    })
}

exports.update = function(product){
    conn.connect(function(err,db){
        var oid = conn.ObjectID(product._id)
        delete product._id
        
        db.collection(DB_COLLECTION)
            .findOneAndUpdate(
                { _id: oid },
                {
                    $set: product
                },
                { upsert : false })
                
    })
}

exports.delete = function(product){
    conn.connect(function(err,db){
        var oid = conn.ObjectID(product._id)
        
        db.collection(DB_COLLECTION)
            .findOneAndDelete({ _id: oid })
        
    })
}