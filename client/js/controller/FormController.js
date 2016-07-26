angular.module('myApp')

    .controller('FormController', function($scope){
        
        $scope.title;
        
        $scope.changeTitle = function (titulo) {
            $scope.title = titulo    
        }
        
    })
    