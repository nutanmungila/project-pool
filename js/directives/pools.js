angular.module("poolsBetting")
  .directive("pools", [function() {
    return {
      restrict: 'E',
      templateUrl: "templates/pools.html"
    };

  }]);
