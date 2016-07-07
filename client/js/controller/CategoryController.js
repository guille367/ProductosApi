angular.module('myApp')

    .controller('CategoryController', function($scope,CategoryService){
        
        $scope.Category
        $scope.selectedIndex = -1
        
        $scope.selectCategory = function(index,item){
            $scope.Category = item
            $scope.selectedIndex = index
        }
        
        $scope.cleanSelection = function (){
            $scope.Category = {}
            $scope.selectedIndex = -1
        }
        
        $scope.save = function () {
            if($scope.Category)
                CategoryService.addCategory($scope.Category)
        }
        
        $scope.update = function () {
            CategoryService.update($scope.Category)
        }
        
        $scope.delete = function(){
            CategoryService.deleteCategory($scope.Category._id)
        }
        
        var getCategories = function() {
            CategoryService.findAll().then(function(d){
            $scope.categories = d    
            })
        }   
        
        //getCategories()
        
          $scope.categories = [{
              name:'aaa',
              description:'www'
          },{
              name:'bbb',
              description:'eee'
          },{
              name:'ccc',
              description:'rrr'
          }]
        
    })