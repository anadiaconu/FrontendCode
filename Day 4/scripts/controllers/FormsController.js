colorApp.controller('FormsController', ['$scope', function($scope){



$scope.submit=function(){
    if($scope.myForm.$valid) alert("Form Valid!!");
    else alert ("Make sure you completed everything!!!")
}
}]);