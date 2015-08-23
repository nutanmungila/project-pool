var app = angular.module("poolsBetting");

app.directive("pools", [function() {
  return {
    restrict: 'E',
    templateUrl: "templates/pools.html"
  };

}]);
