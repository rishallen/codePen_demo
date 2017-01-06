routerApp.controller('PenListCtrl', ['$scope', '$http','CodePen', '$sce', function($scope, $http, CodePen, $sce) {
  console.log(CodePen);
  // $scope.codePenUrl = "meow";
  console.log($scope);

  $scope.yesText = true; // visible when the page loads
  $scope.yesPens = false; //hidden
  $scope.makeActivePen = function(pen) {
    $scope.yesPens = true;
    $scope.yesText = false;
    $scope.activePen = pen;
    $scope.setCodePenUrl(pen.id);
    console.log(pen);
  };

  $scope.setCodePenUrl = function(penId) {
    url = "//codepen.io/IndigoSlate/embed/" + penId + "/?height=680&theme-id=27050&default-tab=result&embed-version=2"
    $scope.codePenUrl = $sce.trustAsResourceUrl(url);
  }

  CodePen.getPens2()
  .then(function success(response) {
    $scope.pens = (response.data.data);
    $scope.activePen = $scope.pens[0];
    $scope.setCodePenUrl($scope.pens[0].id); // set at the start of the page load

    console.log($scope.pens);
  }, function errorCallback(error) {
    alert("error", error);
  });
}]);
