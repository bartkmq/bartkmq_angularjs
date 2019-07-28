'use strict';

angular.module('bartkmq.impressum', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/impressum', {
    templateUrl: 'impressum/impressum.template.html'
  });
}]);