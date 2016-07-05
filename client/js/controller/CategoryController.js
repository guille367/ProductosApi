angular.module('myApp')

    .controller('CategoryController', function($scope,CategoryService){
      
      $scope.pruebaRequest = function () {
            
            var res = CategoryService.findAll().then(function(d){
            })
            
        }
        
        
    })