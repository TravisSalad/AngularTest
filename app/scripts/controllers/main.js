'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */

 angular.module('angularTestApp')
  .controller('MainCtrl', function($scope, uiGmapGoogleMapApi){
    $scope.map = {
      center: {
        latitude: 47.6062,
        longitude: -122.3321
      },
      zoom: 8,
    };
    $scope.options = {
      scrollwheel: false
    };
    uiGmapGoogleMapApi.then(function() {
    });
});
