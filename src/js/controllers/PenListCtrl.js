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
