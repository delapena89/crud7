angular.module('myApp')
.controller('MyController', function($scope, myFactory) {
  myFactory.getDucks()
  .then(function(response){
    $scope.ducks=response.data;
  },function(response){
    console.log('error', response);
  });
  $scope.duck = {
    name: '',
    age: 0
  };
  $scope.postDuck = function() {
    myFactory.postDuck($scope.duck)
    .then(function(response){
      // this callback will be called asynchronously
      // when the response is available
      console.log('SUCCESS',response);
      $scope.ducks.push($scope.duck);
      $scope.duck = {
        name: '',
        age: 0
      };
    }, function(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status
      console.log('FAIL',resonse);
    });
  };

  $scope.getDucks = function() {
    myFactory.getDucks()
    .then(function(response){
      console.log('SUCCESS GET', response);
    },function(response) {
      console.lgo("FAIL GET", response);
    });
  };
});
