angular.module("poolsBetting")
  .factory("poolService", ["$http", function($http) {
    var poolServiceData = {
      data: {
        listpool: [],
        pools: [],
        arrayGroups: [],
        listSelections: [],
        poolprop: {},
        pooldetails: {},
        poollegs: {
          id: "",
          legs: []
        },
        poollegselection: {
          id: "",
          selections: []
        }

      },
      getPool: function() {
        return $http.get(
            "https://colossusdevtest.herokuapp.com/api/pools.json")
          .success(function(data) {
            poolServiceData.data.arrayGroups = [];
            poolServiceData.data.listpool = data;
            for (var i = 0; i < poolServiceData.data.listpool.length; i++) {
              poolServiceData.data.arrayGroups.push(poolServiceData.data
                .listpool[i].groups);
            }

          });
      },

      getPoolById: function(id) {
        return poolServiceData.data.pooldetails;

      },
      postValues: function(msg) {

        return $http.post(
          'https://colossusdevtest.herokuapp.com/api/tickets.json', {
            'message': msg
          });
      },

      getSelections: function(id) {
        return $http.get(
            "https://colossusdevtest.herokuapp.com/api/pools/" + id +
            ".json")
          .success(function(data) {
            poolServiceData.data.poolprop = data;
            poolServiceData.data.pooldetails = data.pool_info;
            poolServiceData.data.poollegs.id = id;
            poolServiceData.data.poollegs.legs = poolServiceData.data
              .poolprop
              .legs;

            // for each leg create a selection list
            poolServiceData.data.poollegs.legSelections =
              poolServiceData.data.poollegs.legs.map(function(leg) {
                return [];
              })
          });
      }

    };
    return poolServiceData;
  }])
