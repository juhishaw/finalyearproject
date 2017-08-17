var app = angular.module('myApp', ['ngSanitize']);



app.controller('myCtrl', function($scope,$location,$http) {
    console.log($location.search().cat)
    $http({
        url:'http://localhost:8000/api/getblog',
        method:'POST',
        data:{
            categ:$location.search().cat
        }
    }).then(function(response){
        
        $scope.blogs=response.data.blogs;
        console.log($scope.blogs)
    },function(err){
        console.log(err)
    });
    
    $scope.showModal=function(blog){
        $("#myModal").modal('show')
        
        $scope.modal={
            text:blog.text
        }
    }
});
//app.controller('myCtrl1', function($scope, $http) {
//    $scope.on=function(){
//        console.log($scope.blog)
//        $http({
//            url:'',
//            method: 'POST',
//            data:$scope.blog
//        })
//    }
//    $scope.options={
//        language: 'en',
//    allowedContent: true,
//    entities: false
//    }
//    $scope.onReady=function(){
//        
//    }
//    
//})
