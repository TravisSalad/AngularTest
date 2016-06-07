'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the angularTestApp
 */

 angular.module('angularTestApp')
 .controller('NewCtrl', ['$scope', '$log', 'uiGmapGoogleMapApi', 'current', '$localStorage', function ($scope, $log, GoogleMapApi, current, $localStorage) {
     angular.extend($scope, {

       //Create map and initial center, zoom
       map: {
         center: {
           latitude: 47.6062095,
           longitude: -122.3320708
         },
         zoom: 8
       },
       //create searchbox functionality
       searchbox: {
         template:'searchbox.tpl.html',
         events:{
            //get searchbox information, pull ID to send GET request to receive full JSON response in current service
             places_changed: function(searchBox) {
             var location = searchBox.getPlaces();

             $scope.currentPlace = current.query({
               placeID: location[0].place_id
             });

             //Search functionality
             $scope.findPlaces = function(city){

               var lat = city.result.geometry.location.lat;
               var lng = city.result.geometry.location.lng;

               $scope.map = {
                 center: {
                   latitude: lat,
                   longitude: lng
                  },
               };
               $scope.coords = {
                 latitude: lat,
                 longitude: lng
               };
             };

             //save function for adding places to bucket list
             $scope.addPlaces = function(city){

               var name = city.result.name;
               var lat = city.result.geometry.location.lat;
               var lng = city.result.geometry.location.lng;
               var url = city.result.url;
               var alert;


               var placeData = {
                  'name': name,
                  'url': url,
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
                    alert('city already saved');
                    }
                }
              };

            }
          }
        },
       options: {
         scrollwheel: false
       }
     });




     //set storage to local storage
     $scope.storage = $localStorage;
     //move center of map to saved location on click
     $scope.refocus = function(latitude, longitude) {
       $scope.map = {
         center: {
           latitude: latitude,
           longitude: longitude
         },
          zoom: 14
       };
     };




     //delete function to remove place from bucket list
     $scope.removePlace = function(place){
       var index = $scope.storage.savedCities.indexOf(place);
       $scope.storage.savedCities.splice(index, 1);
     };




     //saveMap function so far just saves name, need to create functionality
     $scope.saveMap = function(){

       var title = $scope.title;
       var saveTitle = {
         'title': title
       };

       if (!$localStorage.savedMaps){
           $localStorage.savedMaps = [saveTitle];
       } else {
           // we have already saved some cities.
           // check to make sure we haven't already saved the current city.
       var save = true; // initialize the save decision variable.
           // use this loop to check if we've already saved the city.
       for (var i = 0; i < $localStorage.savedMaps.length; i++){
           if ($localStorage.savedMaps[i].title === saveTitle.title){
           //this is a duplicate, so don't save
           save = false;
           }
         }
       if (save === true){
           $localStorage.savedMaps.push(saveTitle);
       } else {
           alert('city already saved');
           }
       }
     };
     //end save map



 }]);
