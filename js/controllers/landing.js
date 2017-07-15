angular.module('doacao').controller('LandingController', LandingController);

function LandingController($scope, $firebaseAuth, $firebaseArray, $state, $interval){
    $scope.redirecionarCadastro = function(){
        $state.go('cadastro');
    };

    $scope.redirecionarLogin = function(){
        $state.go('login');
    };

    // $scope.cronometrar = function(){
    //     $scope.contador = 0;
    //     for(var i = 0; i <= 1450; i++){
    //         $scope.contador++;
    //     }
    // };

    $scope.contador = 0;
    $interval(function(){
        $scope.contador = $scope.contador + 14;
    }, 100);
}
