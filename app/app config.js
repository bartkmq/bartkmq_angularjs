'use strict';

// Declare app level module which depends on views, and core components
angular.module('bartkmq', [
  'ngRoute',
  'bartkmq.personal',
  'bartkmq.projects',
  'bartkmq.skills',
  'bartkmq.impressum'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/personal', { template: '<personal></personal>'}).
    when('/projects', { template: '<projects></projects>'}).
    when('/skills', { template: '<skills></skills>'}).
    when('/posts', { template: '<posts></posts>'}).
    when('/impressum', { template: '<impressum></impressum>'}).

    otherwise({redirectTo: '/personal'});
}]);
