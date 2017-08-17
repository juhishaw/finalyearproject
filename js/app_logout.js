var app = angular.module('myApp', []);
app.controller('myCtrl1', function ($scope, $http) {
    $scope.logout=function(){
    localStorage.clear();    
    }
    
});
