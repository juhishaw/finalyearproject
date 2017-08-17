var app = angular.module('myApp', []);



app.controller('sign', function ($scope, $http, $location) {

    $scope.sign = function () {
        console.log($scope.data)
        $http({
            url: 'http://localhost:8000/registration',
            method: 'POST',
            data: $scope.data,
        }).then(function (response) {
            window.location = 'login.html'
            console.log(response.data)

        }, function (response) {
            console.log(response.data)
        });

    };



})
