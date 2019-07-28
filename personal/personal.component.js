'use strict';

angular.module('bartkmq.personal', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/personal', {
    templateUrl: 'personal/personal.template.html'
  });
}]);