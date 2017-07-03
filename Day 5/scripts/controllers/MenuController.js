hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService', 'JobActionsService',
                            function ($scope, EmployeeActionsService, JobActionsService) {
    /*
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];
    */

    $scope.employeeActionList = EmployeeActionsService;
    $scope.jobActionList = JobActionsService;
    $scope.currentDate = new Date();
}]);
