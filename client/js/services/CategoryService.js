angular.module('myApp')

    .service('CategoryService',function($http){
        
        var extractData = function(res){
            return res.data
        }
        
        this.findAll = function(){
            return $http.get('/categories')
                .then(extractData)
        }
        
        this.addCategory = function(c){
            $http.post('/categories',c)
        }
        
        this.updateCategory = function(c){
            $http.put('/categories',c)
        }
        
        this.deleteCategory = function(categoryID){
            $http.delete('/categories/' + categoryID)
        }
        
    })