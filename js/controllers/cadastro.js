angular.module('doacao').controller('CadastroController', CadastroController);

function CadastroController($scope, $firebaseAuth, $firebaseArray, $state){
    var auth = $firebaseAuth();
    var ref = firebase.database().ref('usuarios');
    var usuarios = $firebaseArray(ref);

    var ref2 = firebase.database().ref('hemocentros');
    var hemocentros = $firebaseArray(ref2);

    $scope.dados = {};
    $scope.hemocentros = {
        'Nome': 'Fundação Pró-Sangue Hemocentro de São Paulo - Posto Mandaqui',
        'Endereço': 'R. Voluntários da Pátria, 4227 - Mandaqui - São Paulo, SP'
    };
    $scope.cadastrar = cadastrar;
    $scope.cadastrarSucesso = cadastrarSucesso;

    function cadastrar(){
        auth.$createUserWithEmailAndPassword($scope.dados.email, $scope.dados.senha).then(cadastrarSucesso);
    }

    function cadastrarSucesso(){
        $scope.dados.nascimento = $scope.dados.nascimento.getDate().toString() + '/' + ($scope.dados.nascimento.getMonth() + 1).toString() + '/' + $scope.dados.nascimento.getFullYear().toString();
        console.log($scope.dados);
        // usuarios.$add($scope.dados);
        // hemocentros.$add($scope.hemocentros);
        $scope.alerta = true;
        $state.go('home');
    };
}
