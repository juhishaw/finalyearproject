var app = angular.module('myApp', []);

app.run(function($rootScope){
    if(localStorage.getItem('token') != null){
        $rootScope = localStorage.getItem('token')
    }
});

app.controller('log', function ($scope, $location, $http) {

    $scope.login = function () {
        $http({
            url: 'http://localhost:8000/login',
            method: 'POST',
            data: $scope.user
        }).then(function (response) {
            $scope.checkLogin = response;
            console.log($scope.checkLogin)
            console.log($scope.checkLogin.data.token)
            localStorage.setItem('token',$scope.checkLogin.data.token);
            
            if($scope.checkLogin.data.success===true){
            alert("Successfully Registered!")
                window.location='postfront.html'
                }
            else{
                alert("Invalid Username/Password!")
                window.location='login.html'
                
}
        }, function (response) {
            $scope.checkLogin = response;
            console.log(response.data)
            
                    });
    }
    //    if(res.token)
    //        {
    //            localStorage.setItem('currentUser', JSON.stringify({ token: token, name: name }));
    //
    //var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //var token = currentUser.token; // your token
    //        }
//    $scope.checkLogin = function (result) {
//        $http.get("")
//            .success(function (response) {
//                $scope.myData = response;
//                if (!angular.isObject($scope.myData[0]))
//                    alert("Invalid user name");
//
//                else {
//                    if ($scope.myData[0].USRPWD !== $scope.password)
//                        alert("Invalid password");
//                    else
//                        //alert("Successfully logged in");
//                        $window.location.href = 'postfront.html';
//                }
//            })
//            .error(function () {
//                alert("Resource not found");
//
//            });
//    };
});
