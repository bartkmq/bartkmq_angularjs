'use strict';

// Declare app level module which depends on views, and core components
angular.module('bartkmq', [
  'ngRoute',
  'bartkmq.personal-data',
  'bartkmq.view2',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/personal-data'});
}]);
