hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";
        $scope.managers =[];
        $scope.jobs =[];
        $scope.departments =[];
        $scope.employee = {};
        //TODO #HR5


        $http.get(CommonResourcesFactory.findOneEmployeeUrl+$routeParams.employeeId)
            .success(function (data, status, headers, config) {
                $scope.employee=data;
            })
            .error(function (data, status, headers, config) {
                alert("Error: " + status);
            });

        EmployeeService.findManagers()
            .then(function (res) {
                //   console.log(res);
                $scope.managers = EmployeeService.findManagersFromEmployees(res.data);
            }, function (err) {
                console.log("Error: " + err);
            });

        EmployeeService.findDepartments()
            .then(function (res) {
                //  console.log(res);

                    $scope.departments = res.data;
            }, function (err) {
                console.log("Error: " + err);
            });

        EmployeeService.findJobs()
            .then(function (res) {
                    $scope.jobs = res.data;
            }, function (err) {
                console.log("Error: " + err);
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        $scope.delete = function (deleteEmployee) {
            $http({url: CommonResourcesFactory.deleteEmployeeUrl, method: 'DELETE',headers: {
                "Content-Type": "application/json"}, data: deleteEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };


        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);