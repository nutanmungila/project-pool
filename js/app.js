var app = angular.module("poolsBetting", ['ngMaterial', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      template: "<pool-list> </pool-list>",

    })
    .state('pooldetails', {
      url: "/pool/:id",
      template: "<selections-list></selections-list>"
    });

});
