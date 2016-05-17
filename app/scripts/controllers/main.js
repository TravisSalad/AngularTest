'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */

 angular.module('angularTestApp')
 .controller('MainCtrl', ['$scope', '$log', 'uiGmapGoogleMapApi', 'current', '$localStorage', function ($scope, $log, GoogleMapApi, current, $localStorage) {
     angular.extend($scope, {
       map: {
         center: {
           latitude: 47.6062095,
           longitude: -122.3320708
         },
         zoom: 12
       },
       coords: {
         latitude: {},
         longitude: {}
       },
       searchbox: {
         template:'searchbox.tpl.html',
         events:{
             places_changed: function(searchBox) {
             var location = searchBox.getPlaces();
             $scope.placesID = location[0].place_id;



             $scope.addPlaces = function(){
               $scope.placesFound = current.query({
                  placeID: $scope.placesID
                });

                $scope.$storage = $localStorage;
                $localStorage.name = location[0].name;
                $localStorage.lat = location[0].geometry.location.lat();
                $localStorage.lng = location[0].geometry.location.lng();

                $scope.map = {
                  center: {
                    latitude: location[0].geometry.location.lat(),
                    longitude: location[0].geometry.location.lng()
                   }
                };
                $scope.coords = {
                  latitude: location[0].geometry.location.lat(),
                  longitude: location[0].geometry.location.lng()
                };
              };


              $scope.findPlaces = function(){
                $scope.map = {
                  center: {
                    latitude: location[0].geometry.location.lat(),
                    longitude: location[0].geometry.location.lng()
                   },
                  zoom: 12
                };
                $scope.coords = {
                  latitude: location[0].geometry.location.lat(),
                  longitude: location[0].geometry.location.lng()
                };
              };


            }
          }
        },
       options: {
         scrollwheel: false
       }
     });
 }]);
