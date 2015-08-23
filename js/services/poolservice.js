var app = angular.module("poolsBetting");

app.factory("poolService", ["$http", function($http) {
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
      },
      selectedSelections: []

    },
    getPool: function() {
      return $http.get(
          "https://colossusdevtest.herokuapp.com/api/pools.json")
        .success(function(data) {
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

          poolServiceData.data.listSelections = [];
          for (var j = 0; j < poolServiceData.data.poollegs.legs.length; j++) {
            poolServiceData.data.listSelections.push(
              poolServiceData.data
              .poollegs.legs[j].selections);
            poolServiceData.data.poollegselection.id =
              poolServiceData.data.poollegs.legs[0].id;
            poolServiceData.data.poollegselection.id =
              poolServiceData.data.poollegs.legs[0].id;
          }

        });
    }

  };
  return poolServiceData;
}])
