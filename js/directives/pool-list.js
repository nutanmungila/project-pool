angular.module("poolsBetting")
  .directive("poolList", [function($scope) {
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
          $state.go('pooldetails', {
            id: poolitem.id
          });
          poolService.getSelections(poolitem.id);

        }
      }]
    };
  }]);
