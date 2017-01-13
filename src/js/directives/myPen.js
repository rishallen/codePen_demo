routerApp.directive('myPen', function() {
  return {
    templateUrl: 'src/views/partials/my-pen.html',
    restrict: 'E',
    controller: 'PenListCtrl'
  }
});
