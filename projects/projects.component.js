'use strict';

angular.module('bartkmq.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.template.html',
    controller: ['$http',
      function ProjectsController($http) {
      var self = this;

      $http.get('assets/projects.json').then(function(response)
      {
        self.projects = response.data;
      });

      self.projects = [{name:'name',desc:'desc',lang:'lang'}];
    }]
  });
}]);