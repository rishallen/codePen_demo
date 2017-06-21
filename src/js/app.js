var routerApp = angular.module("routerApp", ["ngRoute"]);
routerApp.run(function(){
    console.log('hey wow!');
});

routerApp.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("!");

  $routeProvider
  .when("/", { //defined as main page
    templateUrl: "src/views/home.html"
  })
  // .when("/pens/:tags", {
  //   templateUrl: "views/tag-name.html",
  //   controller: 'TagNameCtrl'
  // })
  // .when("/pen/:id", {
  //   templateUrl: "views/my-pen.html",
  //   controller: 'MyPenCtrl'
  // })

  .otherwise("/");
 }]);
