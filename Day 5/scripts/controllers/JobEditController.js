hrApp.controller('JobEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory', 'JobService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, JobService) {
        $scope.requiredErrorMessage = "Please fill out this form!";

        $scope.jobs ={};


        $http.get(CommonResourcesFactory.findOneJobUrl+$routeParams.jobId)
            .success(function (data, status, headers, config) {
                $scope.job=data;
            })
            .error(function (data, status, headers, config) {
                alert("Error: " + status);
            });


        $scope.reset = function () {
            $scope.employee = {};
        };



        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactory.addJobUrl, method: 'POST', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };



    }]);