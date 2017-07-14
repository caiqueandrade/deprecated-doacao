angular.module('doacao').controller('HomeController', HomeController);

function HomeController($scope, $http, $interval){
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
            marker[0].setPosition({lat: $scope.latitude, lng: $scope.longitude});
            marker[0].setMap(mapa);
            mapa.setZoom(15);

        }
        else {
            console.log('CEP inválido.');
        }
    }

    function buscarErro(){
        console.log('Erro');
    }

    // $interval($http.get('http://localhost:3000/hemocentros').then(function(response){
    //     for(var i in response.data){
    //         var hemocentro = response.data[i];
    //
    //         new google.maps.Marker({
    //             position: hemocentro,
    //             map: mapa,
    //         })
    //     }
    // }), 2000);


    $interval($scope.acessarApi = function(){
        $http.get('http://http://174.138.68.160:3000/hemocentros').then(function(resposta){
            for(var i in resposta.data){
                var hemocentroLat = Number(resposta.data[i].lat);
                var hemocentroLng = Number(resposta.data[i].lng);

                new google.maps.Marker({
                    position: {lat: hemocentroLat, lng: hemocentroLng},
                    map: mapa,
                });
            }
        })
    }, 500);

}
