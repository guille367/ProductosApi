angular.module('myApp')

    .controller('ProductController', function($scope,ngDialog, ProductService, CategoryService){
        
        $scope.products = []
        $scope.product = {}
        
        $scope.categories = []
        
        $scope.selectProduct = function(index,item){
            $scope.product = item
            $scope.selectedIndex = index
        }
        
        $scope.cleanSelection = function (){
            refresh()
        }
        
        $scope.openDialog = function () {
            
            CategoryService.findAll().then(function(c){
                $scope.categories = c
            })
            
            ngDialog.openConfirm({
                    template: 'crudDialog',
                    className: 'ngdialog-theme-default',
                    scope:$scope
                })
                
        }
        
        $scope.save = function(){
            ProductService.addProduct($scope.product)
            refresh()
        }
        
        $scope.update = function () {
            ProductService.updateProduct($scope.product)
        }
        
        $scope.delete = function(){
            ProductService.deleteProduct($scope.product._id)
            refresh()
        }
        
        var getProducts = function(){
            ProductService.findAll().then(function(p){
                $scope.products = p;
            })
        }
        
        function refresh(){
            $scope.product = {}
            $scope.selectedIndex = -1
            getProducts()
        }
        
        getProducts()
        
    })