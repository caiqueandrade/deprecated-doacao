angular.module('doacao').config(rotas);

function rotas($stateProvider, $urlRouterProvider) {
    var cadastro = {
        name: 'cadastro',
        url: '/cadastro',
        templateUrl: 'templates/cadastro.html',
        controller: 'CadastroController'
    };

    $stateProvider.state(cadastro);

    $urlRouterProvider.otherwise('/cadastro');
}
