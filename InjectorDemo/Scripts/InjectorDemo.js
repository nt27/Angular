/// <reference path="c:\Users\thangarajn\documents\visual studio 2015\Projects\AJS\Day1\Banking\Scripts/angular.js" />

var userModule = angular.module('UserModule', []);


//Defining the constants
userModule.constant('ServiceOptions', ['Users', 'Posts', 'Album', 'Comments', 'Photos']);


userModule.controller('UserController', ['$scope', 'ServiceOptions', '$http', function ($scope, ServiceOptions, $http) {


    $scope.options = ServiceOptions;
    $scope.type = "";
    $scope.typeChange = function () {
        console.log($scope.type);

        if ($scope.type == "Users") {
            document.getElementById("divUser").style.visibility = 'visible';
            document.getElementById("divPosts").style.visibility = 'hidden';
            $http({

                method: 'GET',
                dataType: 'jsonp', //-JSONP - paded data
                headers: {
                    'Content-Type': 'application/json'
                },
                url: 'https://jsonplaceholder.typicode.com/users'
            }).success(function (data) {
                //Passing to scope variable.
                $scope.userObj = data;
                //console.log(data);
            });
        }
        else if ($scope.type == "Posts") {

            document.getElementById("divUser").style.visibility = 'hidden';
            document.getElementById("divPosts").style.visibility = 'visible';
            $http({

                method: 'GET',
                dataType: 'jsonp', //-JSONP - paded data
                headers: {
                    'Content-Type': 'application/json'
                },
                url: 'https://jsonplaceholder.typicode.com/posts'
            }).success(function (data) {
                //Passing to scope variable.
                $scope.postObj = data;
                //console.log(data);
            });
        }
        else
        {
            document.getElementById("divUser").style.visibility = 'hidden';
            document.getElementById("divPosts").style.visibility = 'hidden';

        }
    };
}]);