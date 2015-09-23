angular.module('myApp',['ngRoute','displayDirective'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MyController'
    }).otherwise({
      redirectTo:'/'
    });
});
