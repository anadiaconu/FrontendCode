hrApp.controller('JobAddController', ['$scope', '$http', '$location', '$routeParams', 'CommonResourcesFactory','JobService',
    function($scope, $http, $location, $routeParams, CommonResourcesFactory, JobService) {

        $scope.job ={};
        $scope.requiredErrorMessage = "Please fill out this form!";



        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
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