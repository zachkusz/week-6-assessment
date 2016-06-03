app.controller('HomeController', ['$scope','$http','DataFactory', function($scope, $http, DataFactory) {

  console.log('home controller running');

  $scope.dataFactory = DataFactory;


  $scope.powers = ['pie', 'stuff', 'yes'];
  $http.get('/powers').then(
    function(response){
      console.log(response.data);
      // $scope.powers = response.data;
      var powers = [];
      response.data.forEach(function(){

      });
    }
  );

  $scope.enterHero = function(){
    var hero = {};
    hero.alias = $scope.alias;
    hero.first_name = $scope.first_name;
    hero.last_name = $scope.last_name;
    hero.city = $scope.city;
    hero.power_name = $scope.selected;
    console.log(hero);

    $http.post('/heroes', hero).then(
      function() {
        console.log('posted hero');
      }
    );
  }

  //used to add 'powers' collection to mongo

  // $scope.enterPower = function(){
  //   var newpower = {};
  //   newpower.power_name = $scope.power;
  //   console.log(newpower);
  //   $http.post('/powers', newpower).then(
  //     function() {
  //       console.log('posted power');
  //     }
  //   );
  // }

}]);
