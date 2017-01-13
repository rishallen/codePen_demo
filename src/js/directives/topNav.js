routerApp.directive('topNav', function() {
  return {
    templateUrl: 'src/views/partials/nav.html',
    restrict: 'E',
    controller: 'PenListCtrl'
  }

});
