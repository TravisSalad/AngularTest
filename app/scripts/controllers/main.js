'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */

 angular.module('angularTestApp')
  .controller('MainCtrl', function($scope){
    $scope.map = {
      center: {
        latitude: 47.6062,
        longitude: -122.3321
      },
      zoom: 8,
    };
  });

// angular.module('angularTestApp')
//   .controller('MainCtrl', function ($scope, current) {
//     $scope.current = current.query();
//
//
//     $scope.refreshCurrent = function(){
//         $scope.current = current.query({
//             location: $scope.location
//         });
//     };
//   });
