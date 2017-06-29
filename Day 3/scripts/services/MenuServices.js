var hrApp = angular.module('hrApp');
hrApp.value('employeeActionsService', [
        {
            label: "Employee list",
            url: "#/employeeslist"
        },
        {
            label: "Add employee",
            url: "#/employeeadd"
        }

    ]
);