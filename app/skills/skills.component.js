'use strict';

angular.module('bartkmq.skills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/skills', {
    templateUrl: 'skills/skills.template.html',
    controller: ['$http',
      function SkillsController($http) {
      var self = this;

      $http.get('assets/skills.json').then(function(response)
      {
        self.skills = response.data;
      })
    }]
  });
}]);