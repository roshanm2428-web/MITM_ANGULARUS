angular.module('SmartLibApp', [])
.controller('DashboardController', ['$scope', function($scope) {
    $scope.librarianName = "Chief Librarian";
    $scope.metrics = { totalHoldings: 14820, availableStacks: 11450, activeLoans: 3120, overdueStacks: 250 };
    $scope.returnQueue = [
        { id: 1, title: "Principles of Quantum Computing", author: "Prof. David M. Wallace", callNumber: "QC174.12", status: "On-Time Return", location: "Drop box A-2" },
        { id: 2, title: "Neural Networks & Cognitive Architectures", author: "Dr. Sophia Lin", callNumber: "QA76.87", status: "+2 Days Late ($4.00)", location: "Main Desk" }
    ];
    $scope.executeAction = function(action) { alert('Launching: ' + action); };
    $scope.processReturn = function(item) {
        var idx = $scope.returnQueue.indexOf(item);
        if(idx !== -1) { $scope.returnQueue.splice(idx, 1); alert('Processed return for: ' + item.title); }
    };
    $scope.broadcastReminders = function() { alert('Reminders dispatched to 18 overdue patrons.'); };
}]);
