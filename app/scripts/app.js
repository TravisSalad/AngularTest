'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl',
        controllerAs: 'new'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/saved', {
        templateUrl: 'views/saved.html',
        controller: 'SavedCtrl',
        controllerAs: 'saved'
      })
      .otherwise({
        redirectTo: '/'
      });
      uiGmapGoogleMapApiProvider.configure({
          key: 'AIzaSyANULjox-0qcLdFkdlsYBoj4iMlOUiS5_g',
          v: '3.23', //defaults to latest 3.X anyhow
          libraries: 'places'
      });
  });
