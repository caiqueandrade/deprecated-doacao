var app = angular.module('starWars', []);

app.controller('starWarsCtrl', function ($scope, $http){
    $scope.hide = false;
    $scope.submit = function() {

      $http({
          method: 'GET',
          url: 'https://swapi.co/api/people/?search=' + $scope.nome
      }).then(function successCallback(response) {
        console.log(response);
          $scope.star = response.data.results[0];

          // var teste = $scope.star.homeworld.replace('http', 'https');
          //     $http({
          //     method: 'GET',
          //     url: teste
          // }).then(function successCallback(response) {
          //     $scope.homeworld = response.data
          //     $scope.hide = true;

          // }, function errorCallback(response) {
          // });

          $scope.hide = true;

      }, function errorCallback(response) {
      });
    }
});

app.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if(event.which === 13) {
        scope.$apply(function(){
        scope.$eval(attrs.ngEnter);
      });
        event.preventDefault();
      }
    });
  };
});
