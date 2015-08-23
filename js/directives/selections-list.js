var app = angular.module("poolsBetting");

app.directive("selectionsList", [function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: "templates/selections-list.html",
    controller: ["$scope", "poolService", "$state", function($scope,
      poolService, $state) {
      $scope.poolData = poolService.data;

      poolService.getSelections($state.params.id).then(function() {
        $scope.pool = poolService.getPoolById($state.params.id);
      });

      $scope.toggle = function(item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function(item, list) {
        return list.indexOf(item) > -1;
      };

      $scope.onClickSelections = function(selection) {
        $scope.poolData.selectedSelections.push(selection);
        console.log("sel", $scope.poolData.selectedSelections);
      }
    }]

  }


}]);
