'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the angularTestApp
 */


angular.module('angularTestApp')
  .controller('HomeCtrl', ['$scope', '$log', 'uiGmapGoogleMapApi', function($scope, $log, GoogleMapApi){
    angular.extend($scope, {
      map: {
        center: {
          latitude: 47.6062095,
          longitude: -122.3320708
        },
        zoom: 12
      },
      options: {
        scrollwheel: false
      },
    });
  }]);
