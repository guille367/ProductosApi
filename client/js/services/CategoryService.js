angular.module('myApp')

    .service('CategoryService',function($http){
        
        path = 'https://localhost:3000'
        //path = ''
    
        var extractData = function(res){
            return res.data
        }
        
        this.findAll = function(){
            return $http.get( path + '/categories')
                .then(extractData)
        }
        
        this.addCategory = function(c){
            return $http.post(path + '/categories',c)
                .then(extractData)
        }
        
        this.updateCategory = function(c){
            return $http.put(path + '/categories',c)
                .then(extractData)
        }
        
        this.deleteCategory = function(categoryID){
            return $http.delete(path + '/categories/' + categoryID)
                .then(extractData)
        }
        
    })