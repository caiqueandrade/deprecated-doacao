angular.module('doacao').config(rotas);

function rotas($stateProvider, $urlRouterProvider) {
    var cadastro = {
        name: 'cadastro',
        url: '/cadastro',
        templateUrl: 'templates/cadastro.html',
        controller: 'CadastroController'
    };

    var login = {
        name: 'login',
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    };

    var home = {
        name: 'home',
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    };

    $stateProvider.state(cadastro);
    $stateProvider.state(login);
    $stateProvider.state(home);

    $urlRouterProvider.otherwise('/home');
}
