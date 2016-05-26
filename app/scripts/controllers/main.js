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
         zoom: 8
       },
       searchbox: {
         template:'searchbox.tpl.html',
         events:{
             places_changed: function(searchBox) {
             var location = searchBox.getPlaces();

             $scope.currentPlace = current.query({
               placeID: location[0].place_id
             });

             $scope.addPlaces = function(city){

               var name = city.result.name;
               var lat = city.result.geometry.location.lat;
               var lng = city.result.geometry.location.lng;
               var url = city.result.url;

               var placeData = {
                  'url': url,
                  'name': name,
                  'coords': {
                    latitude: lat,
                    longitude: lng
                  }
                };

                if (!$localStorage.savedCities){
                    $localStorage.savedCities = [placeData];
                } else {
                    // we have already saved some cities.
                    // check to make sure we haven't already saved the current city.
                var save = true; // initialize the save decision variable.
                    // use this loop to check if we've already saved the city.
                for (var i = 0; i < $localStorage.savedCities.length; i++){
                    if ($localStorage.savedCities[i].name === placeData.name){
                    //this is a duplicate, so don't save
                    save = false;
                    }
                  }
                if (save === true){
                    $localStorage.savedCities.push(placeData);
                } else {
                    console.log('city already saved');
                    }
                }
              };


              $scope.findPlaces = function(){
                $scope.map = {
                  center: {
                    latitude: location[0].geometry.location.lat(),
                    longitude: location[0].geometry.location.lng()
                   },
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

     $scope.storage = $localStorage;

     $scope.removePlace = function(place){
       var index = $scope.storage.savedCities.indexOf(place);
       $scope.storage.savedCities.splice(index, 1);
     };

 }]);
