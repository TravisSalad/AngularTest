"use strict";angular.module("angularTestApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","uiGmapgoogle-maps"]).config(["$routeProvider","uiGmapGoogleMapApiProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).otherwise({redirectTo:"/"}),b.configure({key:"AIzaSyANULjox-0qcLdFkdlsYBoj4iMlOUiS5_g",v:"3.20",libraries:"places"})}]),angular.module("angularTestApp").controller("MainCtrl",["$scope","$log","uiGmapGoogleMapApi","current",function(a,b,c,d){angular.extend(a,{map:{center:{latitude:40.1451,longitude:-99.668},zoom:8},searchbox:{template:"searchbox.tpl.html",events:{places_changed:function(b){var c=b.getPlaces();a.placesID=c[0].place_id}}},options:{scrollwheel:!1}}),a.placesFound=d.query(),a.findPlaces=function(){a.placesFound=d.query({placeID:a.placesID})},c.then(function(a){a.visualRefresh=!0})}]),angular.module("angularTestApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularTestApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularTestApp").factory("current",["$resource",function(a){return a("https://crossorigin.me/https://maps.googleapis.com/maps/api/place/details/json?placeid=:placeID&key=AIzaSyANULjox-0qcLdFkdlsYBoj4iMlOUiS5_g",{},{query:{method:"GET",params:{placeID:"ChIJyU1YTzwC54kRj4V6zn6M68s"},isArray:!1}})}]),angular.module("angularTestApp").run(["$templateCache",function(a){a.put("views/about.html","<h1>About</h1> <p>This is the about view.</p> <hr>"),a.put("views/contact.html","<h1>Contact us!</h1> <p><b>Phone:</b> 111-111-1111</p> <p><b>Email:</b> test@testing.com</p> <hr>"),a.put("views/main.html",'<div ng-app="angularTestApp" ng-controller="MainCtrl"> <div class="col-md-6"> <h1>Seattle, WA</h1> <div id="search" ng-model="location"></div> <button class="btn btn-lg btn-primary" ng-click="findPlaces()">Find City</button> <p>{{location}}</p> <p>Coordinates: {{map.center.latitude}}, {{map.center.longitude}}</p> <p>{{map.zoom}}</p> </div> <script id="searchbox.tpl.html" type="text/ng-template"><input type="text" placeholder="Search"></script> <ui-gmap-google-map class="col-md-6" center="map.center" zoom="map.zoom" options="options"> <ui-gmap-search-box parentdiv="\'search\'" template="searchbox.template" events="searchbox.events"></ui-gmap-search-box> </ui-gmap-google-map> <p>{{placesID}}</p> <p>{{placesFound.result.geometry.location.lat}}</p> <p>{{placesFound.result.geometry.location.lng}}</p> <p>{{placesFound.result.name}}</p> <p>{{placesFound.result.formatted_address}}</p> <ul> <li>{{placesFound.result.name}}</li> </ul> </div>')}]);