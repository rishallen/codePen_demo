routerApp.service('CodePen', ['$http', function($http){
  this.getPens2 = getPens1; //reference to scope Class Method
  function getPens1(tagged) {
    tagged = tagged != null ? "/?tag="+tagged : ''
    return $http({
      method: "GET",
      url: "http://cpv2api.com/pens/public/IndigoSlate"+tagged,
    });
  }

  this.getCategories2 = getCategories1;
  function getCategories1() {
    console.log("made it");
    return $http.get("http://cpv2api.com/tags/IndigoSlate/?callback=JSON_CALLBACK")
    .then(function(resp){
      return resp.data;
    }).catch(function(err){
      console.log(err)
    });
  }

}]);
