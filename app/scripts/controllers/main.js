'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */

 angular.module('angularTestApp')
 .controller('MainCtrl', ['$scope', '$log', 'uiGmapGoogleMapApi', 'current', function ($scope, $log, GoogleMapApi, current) {
     angular.extend($scope, {
       map: {
         center: {
           latitude: 40.1451,
           longitude: -99.6680
         },
         zoom: 8
       },
       searchbox: {
         template:'searchbox.tpl.html',
         events:{
              places_changed: function(searchBox) {
              var location = searchBox.getPlaces();
              $scope.placesID = location[0].place_id;
           }
         }
       },
       options: {
         scrollwheel: false
       }
     });

     $scope.placesFound = current.query();

     $scope.findPlaces = function(){
       $scope.placesFound = current.query({
         placeID: $scope.placesID
      });
    };

     GoogleMapApi.then(function(maps) {
       maps.visualRefresh = true;
     });
 }]);
