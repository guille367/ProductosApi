var conn = require('./connection')
var DB_COLLECTION = 'products'

exports.get = function(callback){
    conn.connect(function(err,db){
        console.log('get products')
        db.collection(DB_COLLECTION)
            .find()
            .toArray(callback)
    })
}

<<<<<<< HEAD
exports.add = function(product){
    conn.connect(function(err,db){
        console.log('Add Product: ' + product)
        db.collection(DB_COLLECTION)
            .insert(product)
=======
exports.add = function(product,callback){
    conn.connect(function(err,db){
        console.log('Add Product: ' + product)
        db.collection(DB_COLLECTION)
            .insertOne(product,callback)
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
    })
}

exports.update = function(product){
    conn.connect(function(err,db){
        var oid = conn.ObjectID(product._id)
        delete product._id
        console.log('Update product: ' + product._id)
        db.collection(DB_COLLECTION)
            .findOneAndUpdate(
                { _id: oid },
                {
                    $set: { 
                            price: product.price,
                            category: product.category,
                            name: product.name,
                            description: product.description
                    }
                },
                { upsert : false })
                
    })
}

exports.delete = function(id){
    conn.connect(function(err,db){
        var oid = conn.ObjectID(id)
        console.log('Delete product: ' + id)
        db.collection(DB_COLLECTION)
            .findOneAndDelete({ _id: oid })
        
    })
}