angular.module('myApp')

    .service('CategoryService',function($http){
        
        let path = 'https://productosapi-ponceandresguille.c9users.io'
        
        let extractData = function(res){
            alert(res.data);
        };
        
        this.findAll = function(){
            return $http.get(path + '/categorias')
                .then(extractData)
        }
        
    })