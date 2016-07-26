angular.module('myApp')

    .service('ProductService',function($http){
        
<<<<<<< HEAD
=======
        path = 'http://localhost:3000'
        //path = ''
    
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
        var extractData = function (res) {
            return res.data
        }
        
        this.findAll = function(){
<<<<<<< HEAD
            return $http.get('/products')
=======
            return $http.get(path + '/products')
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
                .then(extractData)
        }
        
        this.addProduct = function(p){
<<<<<<< HEAD
            $http.post('/products',p)
        }
        
        this.updateProduct = function(p){
            $http.put('/products',p)
        }
        
        this.deleteProduct = function(id){
            $http.delete('/products/' + id )
=======
            return $http.post(path +'/products',p).then(extractData)
        }
        
        this.updateProduct = function(p){
            return $http.put(path +'/products',p)
                .then(extractData)
        }
        
        this.deleteProduct = function(id){
            return $http.delete(path +'/products/' + id )
                .then(extractData)
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
        }
       
    })