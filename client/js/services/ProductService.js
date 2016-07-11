angular.module('myApp')

    .service('ProductService',function($http){
        
        var extractData = function (res) {
            return res.data
        }
        
        this.findAll = function(){
            return $http.get('/products')
                .then(extractData)
        }
        
        this.addProduct = function(p){
            $http.post('/products',p)
        }
        
        this.updateProduct = function(p){
            $http.put('/products',p)
        }
        
        this.deleteProduct = function(id){
            $http.delete('/products/' + id )
        }
       
    })