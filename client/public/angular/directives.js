angular.module('displayDirective', [])
.directive('displayDucks', function() {
  return {
    restrict: "E",
    replace: true,
    templateUrl: 'views/display-ducks.html'
  };
});
