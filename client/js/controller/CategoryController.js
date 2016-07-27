angular.module('myApp')

    .controller('CategoryController', function($scope,CategoryService,$mdDialog,$mdMedia){
        
        $scope.categories = []
        $scope.category = {}
        $scope.selectedIndex = -1
        $scope.isOpen
        
        $scope.selectCategory = function(index,item){
            $scope.category = item
            $scope.selectedIndex = index
            $scope.indiceSeleccionado = index
            $scope.isOpen = true
        }
        
        $scope.cleanSelection = function (){
            refresh()
        }
        
        /*$scope.openDialog = function () {
            
            ngDialog.openConfirm({
                    template: 'crudDialog',
                    className: 'ngdialog-theme-default',
                    scope:$scope
                })
                
        }*/
        
        $scope.save = function () {
            CategoryService.addCategory($scope.category)
                .then(function(res){
                    refresh()
                })
        }
        
        $scope.update = function () {
            CategoryService.updateCategory($scope.category)
                .then(function(res){
                    refresh()  
                })
        }
        
        $scope.delete = function(){
            CategoryService.deleteCategory($scope.category._id)
                .then(function(d){
                    refresh()
                })
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
            $mdDialog.hide()
        }
        
     
        $scope.shownav = function(){
            $scope.selectedIndex = -2
        }
        
        $scope.closeNav = function(){
            $scope.selectedIndex = -1
        }
        
        getCategories()
        
        $scope.showAdvanced = function(ev) {
            console.log($scope.category)
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            $mdDialog.show({
              controller: 'CategoryController',
              templateUrl: 'js/templates/crudCategories.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
              fullscreen: useFullScreen
        })
        }
        
    })