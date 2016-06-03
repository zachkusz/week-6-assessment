var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/heroes', {
      templateUrl: '/views/heroes.html',
      controller: "HeroesController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
