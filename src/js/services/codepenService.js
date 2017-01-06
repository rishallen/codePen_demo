routerApp.service('CodePen', ['$http', function($http){
  this.getPens2 = getPens1; //reference to scope Class Method
  function getPens1() {
    // console.log('ey');
    return $http({
      method: "GET",
      url: "http://cpv2api.com/pens/public/IndigoSlate/?callback=JSON_CALLBACK",
    });
  }
}]);
