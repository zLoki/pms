MainApp.controller("StatisticViewController", function($controller, $scope) {
    $controller('ViewController', {$scope: $scope});

    $scope.main.showBreadcrambs = false;
    $scope.currentProject = Constants.Project.VENUS;
    $scope.currentRelease = Constants.Release.Z3;
    $scope.currentSprint = "Sprint 2";
    $scope.assignedPm = "Dummy User";

    $scope.filterProjects = Constants.Project.list();
    $scope.filterReleases = [Constants.Release.Z1, Constants.Release.Z2, Constants.Release.Z3];

    $scope.init = function() {
        $scope.changeRequests = Constants.CR.list();
    };
    $scope.getStatusName = function(id) {
        var status = Constants.Status.getStatus(id);
        return status ? status.name : null;
    };

    $scope.getPriorityName = function(id) {
        var priority = Constants.Priority.getPriority(id);
        return priority ? priority.name : null;
    };

    $scope.statuses = Constants.Status.list();
    $scope.priorities = Constants.Priority.list();


});
