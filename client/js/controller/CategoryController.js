angular.module('myApp')

    .controller('CategoryController', function($scope,CategoryService,ngDialog){
        
        $scope.categories = []
        $scope.category = {}
        $scope.selectedIndex = -1
        
        $scope.selectCategory = function(index,item){
            $scope.category = item
            $scope.selectedIndex = index
        }
        
        $scope.cleanSelection = function (){
            refresh()
        }
        
        $scope.openDialog = function () {
            
            ngDialog.openConfirm({
                    template: 'crudDialog',
                    className: 'ngdialog-theme-default',
                    scope:$scope
                })
                
        }
        
        $scope.save = function () {
            CategoryService.addCategory($scope.category)
            refresh()
        }
        
        $scope.update = function () {
            CategoryService.updateCategory($scope.category)
            refresh()
        }
        
        $scope.delete = function(){
            CategoryService.deleteCategory($scope.category._id)
            refresh()
        }
        
        
        var getCategories = function() {
            CategoryService.findAll().then(function(d){
            $scope.categories = d    
            })
            
        }   
        
        function refresh(){
            $scope.category = {}
            $scope.selectedIndex = -1
            getCategories()
        }
        
        getCategories()
        
    })