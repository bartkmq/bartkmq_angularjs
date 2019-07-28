'use strict';

angular.module('bartkmq.personal-data', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/personal-data', {
    templateUrl: 'view1/personal-data.html',
    controller: 'personalDataCtrl'
  });
}])

.controller('personalDataCtrl', [function() {

}]);