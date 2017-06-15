angular.module('doacao').controller('LoginController', LoginController);

function LoginController($scope, $state){
  var auth = $firebaseAuth();
  $scope.dados = {};
  $scope.login = login;

  function login(){
      // A única diferença desse controller para o de cadastro é a função
      // usada na comunicação com o Firebase.
      auth.$signInWithEmailAndPassword($scope.dados.email, $scope.dados.senha)
      .then(loginSucesso).catch(loginErro);
  }

  function loginSucesso(){
      $state.go('quadro');
  }

  function loginErro(erro){
      console.log(erro)
  }
}
