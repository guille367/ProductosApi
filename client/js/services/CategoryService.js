angular.module('myApp')

    .service('CategoryService',function($http){
        
        let path = 'https://productosapi-ponceandresguille.c9users.io'
        
        let extractData = function(res){
            return res.data
        };
        
        this.findAll = function(){
            return $http.get(path + '/categorias')
                .then(extractData)
        }
        
        this.addCategory = function(c){
            
        }
        
        this.updateCategory = function(c){
            
        }
        
        this.deleteCategory = function(categoryID){
            
        }
        
    })