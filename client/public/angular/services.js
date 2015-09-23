angular.module('myApp')
.factory('myFactory', ['$http', function($http){
  var factory = {};

  factory.postDuck = function(duck) {
    return $http.post('/duck/' + duck.name + '/' + duck.age);
  };

  factory.getDucks = function() {
    return $http.get('ducks');
  }

  return factory;
}]);
