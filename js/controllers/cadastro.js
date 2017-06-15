angular.module('doacao').controller('CadastroController', CadastroController);

function CadastroController($scope, $firebaseAuth, $firebaseArray, $state){
    var auth = $firebaseAuth();
    var ref = firebase.database().ref('usuarios');
    var usuarios = $firebaseArray(ref);

    $scope.dados = {};
    $scope.cadastrar = cadastrar;
    $scope.cadastrarSucesso = cadastrarSucesso;

    function cadastrar(){
        auth.$createUserWithEmailAndPassword($scope.dados.email, $scope.dados.senha).then(cadastrarSucesso);
    }

    function cadastrarSucesso(){
        console.log($scope.dados)
        usuarios.$add($scope.dados);
        $scope.alerta = true;
        $state.go('home');
    };
}
