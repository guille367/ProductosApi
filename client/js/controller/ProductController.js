angular.module('myApp')

    .controller('ProductController', function($scope, ProductService){
        
        $scope.products = []
        $scope.product = {}
        
        $scope.save = function(){
            
        }
        
        $scope.update = function () {
            // body...
        }
        
        $scope.delete = function(){
            
        }
        
        var getProducts = function(){
            ProductService.findAll().then(function(p){
                $scope.products = p;
            })
        }
        
        getProducts()
        
    })