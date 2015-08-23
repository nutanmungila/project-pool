angular.module("poolsBetting")
  .directive("selectionsList", [function() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: "templates/selections-list.html",
      controller: ["$scope", "poolService", "$state", function($scope,
        poolService, $state) {
        $scope.poolData = poolService.data;
        $scope.bet = {
          stakeamount: 1
        }
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

        $scope.getNoOfLines = function() {
          if ($scope.poolData.poollegs.legSelections) {
            var lengthArray = $scope.poolData.poollegs.legSelections.map(
              function(legSelection) {
                return legSelection.length;
              });

            return lengthArray.reduce(function(a, b) {
              return a * b;
            });
          } else {
            return 0;
          }

        };

      }]

    }


  }]);
