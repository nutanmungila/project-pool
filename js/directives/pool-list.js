var app = angular.module("poolsBetting");

app.directive("poolList", [function($scope) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: "templates/pool-list.html",
    controller: ["$scope", "poolService", "$state", function($scope,
      poolService, $state) {

      poolService.getPool();
      $scope.poolData = poolService.data;

      $scope.showProp = false;
      $scope.pool = {};

      $scope.onClickPool = function(poolitem) {
        //$scope.showProp = true;
        //$scope.pool = poolitem;
        $state.go('pooldetails', {
          id: poolitem.id
        });
        poolService.getSelections(poolitem.id);

      }
    }]
  };
}]);
