angular.module('myApp',['ui.router','ngDialog'])

.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/categories');
  
  // Now set up the states 
  $stateProvider
  
    .state('products', {
      url: '/products',
      templateUrl: './js/templates/products.html',
      controller: 'ProductController'
    })
    
    .state('categories', {
      url: '/categories',
      templateUrl: './js/templates/categories.html',
      controller: 'CategoryController'
    });
    
});