angular.module('myApp')

    .controller('CategoryController', function($scope,CategoryService){
        
        $scope.selectedCategory
        $scope.selectedIndex = -1
        
        $scope.selectCategory = function(index,item){
            $scope.selectedCategory = item
            $scope.selectedIndex = index
        }
        
        $scope.cleanSelection = function (){
            $scope.selectedCategory = {}
            $scope.selectedIndex = -1
        }
        
        $scope.save = function () {
            //var res = CategoryService.findAll().then(function(d){
            //})
        }
        $scope.update = function (c) {
            
        }
        $scope.delete = function(){
            alert($scope.selectedCategory.description)
        }
    
        
        CategoryService.findAll().then(function(d){
            $scope.categories = d    
        })
        
          /*$scope.categories = [{
              name:'aaa',
              description:'www'
          },{
              name:'bbb',
              description:'eee'
          },{
              name:'ccc',
              description:'rrr'
          }]*/
        
    })