angular.module('myApp')

    .service('ProductService',function($http){
        
        path = 'http://localhost:3000'
        //path = ''
    
        var extractData = function (res) {
            return res.data
        }
        
        this.findAll = function(){
            return $http.get(path + '/products')
                .then(extractData)
        }
        
        this.addProduct = function(p){
            return $http.post(path +'/products',p).then(extractData)
        }
        
        this.updateProduct = function(p){
            return $http.put(path +'/products',p)
                .then(extractData)
        }
        
        this.deleteProduct = function(id){
            return $http.delete(path +'/products/' + id )
                .then(extractData)
        }
       
    })