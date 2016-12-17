var routerApp = angular.module("routerApp", ["ngRoute"]);
routerApp.run(function(){
    console.log('hey wow!');
});

routerApp.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("!");

  $routeProvider
  .when("/", { //defined as main page
    templateUrl: "index.html",
    controller: 'PenListCtrl'
  })
  .otherwise("/");
 }]);
