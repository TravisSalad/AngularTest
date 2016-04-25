"use strict";angular.module("angularTestApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).otherwise({redirectTo:"/"})}]),angular.module("angularTestApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularTestApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularTestApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularTestApp").run(["$templateCache",function(a){a.put("views/about.html","<h1>About</h1> <p>This is the about view.</p> <hr>"),a.put("views/contact.html","<h1>Contact us!</h1> <p><b>Phone:</b> 111-111-1111</p> <p><b>Email:</b> test@testing.com</p> <hr>"),a.put("views/main.html",'<div class="container"> <div class="text-center"> <h1>Do some addition!</h1> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <span class="label label-success" style="font-size: 1.2em">{{firstnum + secondnum}}</span> </div><br> </div> </div>')}]);