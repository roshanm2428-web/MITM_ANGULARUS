// Student: [Your Name] | Dept: [Your Department]
var app = angular.module('studentApp', []);

// Parent Controller
app.controller('CollegeController', function($scope) {
    $scope.collegeName = "Government Engineering College";
});

// Child Controller
app.controller('StudentController', function($scope) {
    $scope.students = ["Aarav", "Priya", "Rohan"];
    $scope.showDetails = false;

    $scope.addStudent = function() {
        if ($scope.name) {
            $scope.students.push($scope.name);
            $scope.name = "";
        }
    };
});