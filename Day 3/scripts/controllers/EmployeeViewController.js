var hrApp = angular.module('hrApp');
hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, commonResourcesFactory) {

        $scope.employee = {};



        // TODO #HR6 get employee by id

        $http.get(commonResourcesFactory.findOneEmployeeUrl+$routeParams.employeeid)
            .success(function (data, status, headers, config) {
                $scope.employee=data;
            })
            .error(function (data, status, headers, config) {
                alert("Error: " + status);
            });

        $scope.back = function() {
            // TODO back to Employee List page

            // window.history.back();
            $location.url("/employeeslist");
        }

    }]);