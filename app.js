var app = angular.module('myApp', []);

//parent controller

app.controller('CollegeController', function($scope) {
    $scope.collegename = "abc college";
});

//child controller

app.controller(
    "StudentController", function($scope) {
        $scope.name = "john";
        $scope.department = "Computer Science";
        $scope.semester=3; 

        //array
        $scope.students=[
        "sg",
        "ravi",
        "sachin",
        "hari"
        ];
    }
);