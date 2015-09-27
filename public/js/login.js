
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("http://10.204.227.201:8080/api/sWatchRoute")
  .success(function (response) {$scope.names = response;});
});

var angularJsApp= angular.module('signUpApp',[]);
angularJsApp.controller('signUpCtrl', function ($scope ,$http) {

$scope.signUp = function () {
 //alert("Save Successfully");
       $http({
            method :'POST',
            url:'http://10.204.227.201:8080/api/sWatchRoute',			
            data: { firstName :  $scope.firstName, lastName: $scope.lastName,
			email: $scope.email,
			password: $scope.password,
			sex: $scope.sex,
			mobile: $scope.mobile,
			location: $scope.location},
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            console.log('status',status);
            console.log('data',status);
            console.log('headers',status);
            alert("Save Successfully");
        });
	}
});

 angular.module("CombineModule", ["myApp", "signUpApp"]);