var app = angular.module("appWebsite", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl : "index.html"  
  })  
  .when("/Home", {
    templateUrl : "index.html"
  })
  .when("/About", {
    templateUrl : "about.html"
  })
  .when("/Experience", {
    templateUrl : "experience.html"
  })
  .when("/Contact", {
    templateUrl : "contact.html"
  });
});
