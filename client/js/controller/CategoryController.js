angular.module('myApp')

    .controller('CategoryController', function($scope,CategoryService,ngDialog){
        
        $scope.category = {}
        $scope.selectedIndex = -1
        
        $scope.selectCategory = function(index,item){
            $scope.category = item
            $scope.selectedIndex = index
        }
        
        $scope.cleanSelection = function (){
            $scope.category = {}
            $scope.selectedIndex = -1
        }
        
        $scope.openDialog = function () {
            
            ngDialog.openConfirm({
                    template: 'crudDialog',
                    className: 'ngdialog-theme-default',
                    scope:$scope
                })
                
        }
        
        $scope.save = function () {
           /* if($scope.category._id){
                CategoryService.updateCategory($scope.category)
                return;
            }*/
            
            CategoryService.addCategory($scope.category)
            ngDialog.close()
            
            getCategories()
        }
        
        $scope.update = function () {
            CategoryService.updateCategory($scope.category)
            ngDialog.close()
            getCategories()
        }
        
        $scope.delete = function(){
            CategoryService.deleteCategory($scope.category._id)
            getCategories()
        }
        
        var getCategories = function() {
            CategoryService.findAll().then(function(d){
            $scope.categories = d    
            })
        }   
        
        getCategories()
        
    })