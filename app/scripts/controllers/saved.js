'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:SavedCtrl
 * @description
 * # SavedCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('SavedCtrl', ['$scope', '$localStorage', function ($scope, $localStorage) {
    angular.extend($scope, {
      
    });
    $scope.storage = $localStorage;
  }]);
