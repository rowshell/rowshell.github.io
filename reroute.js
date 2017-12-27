var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function($routeProvider){
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
  .when("/  Contact", {
    templateUrl : "contact.html"
  });
}]);
