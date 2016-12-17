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

routerApp.controller('PenListCtrl', ['$scope', '$http','CodePen', function($scope, $http, CodePen) {
  CodePen.getPens()
  .then(function success(response) {
    $scope.pens = (response.data.data);
    console.log($scope.pens);

    // $(function() {
    // $('#aardvark').click(function() {
    // $('div').html('The text you are adding');
    // });
    // });

  }, function errorCallback(error) {
    alert("error", error);
  });
}]);

routerApp.service('CodePen', ['$http', function($http){
  this.getPens = getPens; //reference to scope Class Method
  function getPens() {
    // console.log('ey');
    return $http({
      method: "GET",
      url: "http://cpv2api.com/pens/public/IndigoSlate/?callback=JSON_CALLBACK",
    });
  }
}]);
