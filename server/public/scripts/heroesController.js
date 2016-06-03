app.controller('HeroesController', ['$scope','$http','DataFactory', function($scope, $http, DataFactory) {

console.log('heroes controller');

$http.get('/powers').then(
  function(response){
    console.log(response.data);
    $scope.choices = response.data;
  }
);

$http.get('/heroes').then(
  function(response){
    console.log(response.data);
    $scope.heroes = response.data;
  }
);

$scope.removeHero = function(id){
  $http.delete('/heroes/' + id).then(
    function(response){
      console.log("deleted " + id);
      $http.get('/heroes').then(
        function(response){
          console.log(response.data);
          $scope.heroes = response.data;
        }
      );
    }
  );
};

}]);
