angular.module('doacao').controller('HomeController', HomeController);

function HomeController($scope, $http){
    $scope.buscar = buscar;
    $scope.buscarSucesso = buscarSucesso;
    $scope.cep;
    $scope.teste;

    function buscar(){
        var chaveGeocoding = 'AIzaSyAYRQ_bjjljKcoaLeSnYXcj0grJsX9xMXc';

        var parametros = {
            method: 'GET',
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + $scope.cep + '&key=' + chaveGeocoding
        }

        $http(parametros).then(buscarSucesso, buscarErro);
    }

    function buscarSucesso(resposta){
        if ($scope.cep.length == 8){
            $scope.latitude = resposta.data.results[0].geometry.location.lat;
            $scope.longitude = resposta.data.results[0].geometry.location.lng;
            console.log('Sucesso');
            console.log($scope.latitude);
            console.log($scope.longitude);
            console.log($scope.cep);

            mapa.setCenter({lat: $scope.latitude, lng: $scope.longitude});
            marker.setPosition({lat: $scope.latitude, lng: $scope.longitude});
            marker.setMap(mapa);
            mapa.setZoom(15);

        }
        else {
            console.log('CEP inválido.');
        }
    }

    function buscarErro(){
        console.log('Erro');
    }

}
