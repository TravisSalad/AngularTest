'use strict';

/**
 * @ngdoc service
 * @name angularTestApp.current
 * @description
 * # current
 * Factory in the angularTestApp.
 */

angular.module('angularTestApp')
.factory('current', function($resource){

  return $resource('https://crossorigin.me/https://maps.googleapis.com/maps/api/place/details/json?placeid=:placeID&key=AIzaSyANULjox-0qcLdFkdlsYBoj4iMlOUiS5_g', {}, {
      query: {
        method: 'GET',
        params: {
          placeID: 'ChIJyU1YTzwC54kRj4V6zn6M68s',
        },
      isArray: false
    },
  });
});
