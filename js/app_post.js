const app=angular.module('myApp',['ckeditor'])

app.controller('myCtrl1', function ($scope, $http) {
    $scope.logout=function(){
    localStorage.clear();    
    }
    $scope.on=function(){
        console.log($scope.blog)
        $http({
            url:'http://localhost:8000/api/blog',
            method:'POST',
            data:$scope.blog
        }).then(function(response){
            console.log(response.data)
        },function(response){
            
        })
    }
});