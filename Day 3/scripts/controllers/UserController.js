var hrApp = angular.module('hrApp');
hrApp.controller('UserController', ['$scope', '$location', 'UserService',
    function ($scope, $location, UserService) {
        $scope.userList = UserService;
        var User = function (fName, lName, mail, phone, birthDate, cnp) {
            this.fName = fName;
            this.lName = lName;
            this.mail = mail;
            this.phone = phone;
            this.birthDate = birthDate;
            this.cnp = cnp;
        }

        $scope.backToMainPage = function () {
            $location.url('/main');
        }

        $scope.reset = function () {
            $scope.fName = "";
            $scope.lName = "";
            $scope.mail = "";
            $scope.phone = "";
            $scope.birthDate = "";
            $scope.cnp = "";

        }

        $scope.save = function () {
            UserService.push(new User($scope.fName, $scope.lName, $scope.mail, $scope.phone, $scope.birthDate, $scope.cnp));
            alert("Data has been saved!");
        }

        $scope.showList = false;

        $scope.show = function () {
            $scope.showList = !$scope.showList;
        }

    }]);