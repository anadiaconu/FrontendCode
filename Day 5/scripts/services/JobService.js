hrApp.service('JobService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
    return {
        findById: function (jobId) {
            return $http.get(CommonResourcesFactory.findOneJobUrl + jobId)
                .success(function (data) {
                    return data;
                })


        }}}]);