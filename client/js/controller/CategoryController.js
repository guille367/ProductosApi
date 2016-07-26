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
<<<<<<< HEAD
            refresh()
=======
                .then(function(res){
                    refresh()
                })
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
        }
        
        $scope.update = function () {
            CategoryService.updateCategory($scope.category)
<<<<<<< HEAD
            refresh()
=======
                .then(function(res){
                    refresh()  
                })
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
        }
        
        $scope.delete = function(){
            CategoryService.deleteCategory($scope.category._id)
<<<<<<< HEAD
            refresh()
=======
                .then(function(res){
                    refresh()  
                })
>>>>>>> d27a5170aaf392f571496d7b5e67183b10d895d7
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