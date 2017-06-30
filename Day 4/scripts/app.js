var colorApp = angular.module('hrApp', ['ngRoute']);

colorApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/colors', {
                templateUrl:'../colors.html',
                controller:'ColorsController'
    })
        .when('/forms', {
            templateUrl: '../form.html',
            controller: 'FormsController'
    });
    }]);
