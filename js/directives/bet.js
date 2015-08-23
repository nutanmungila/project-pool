var app = angular.module("poolsBetting");

app.directive("bet", [function() {
  return {
    restrict: 'E',
    templateUrl: "/templates/bet.html",
    controller: ["$scope", "poolService", function($scope, poolService) {
      $scope.poolData = poolService.data;
      $scope.placeBet = function() {
        poolService.postValues($scope.poolData.selectedSelections);
      }
    }]
  }
}]);
