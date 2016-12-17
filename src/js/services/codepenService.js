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
