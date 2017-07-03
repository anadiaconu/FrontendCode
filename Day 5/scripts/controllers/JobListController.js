hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    function ($scope, $http, $location, CommonResourcesFactory) {

        $scope.jobs = [];


        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

         $scope.viewJob = function (jobId) {
           $location.url('/jobView/' + jobId);
        };

        $scope.editJob = function(jobId) {
            $location.url('/jobEdit/' + jobId);
        };



     }]);