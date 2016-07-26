angular.module('myApp')

    .service('CategoryService',function($http){
        
<<<<<<< HEAD
=======
        path = 'http://localhost:3000'
        //path = ''
    
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
        var extractData = function(res){
            return res.data
        }
        
        this.findAll = function(){
<<<<<<< HEAD
            return $http.get('/categories')
=======
            return $http.get( path + '/categories')
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
                .then(extractData)
        }
        
        this.addCategory = function(c){
<<<<<<< HEAD
            $http.post('/categories',c)
        }
        
        this.updateCategory = function(c){
            $http.put('/categories',c)
        }
        
        this.deleteCategory = function(categoryID){
            $http.delete('/categories/' + categoryID)
=======
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
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
        }
        
    })