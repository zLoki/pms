MainApp.controller("StatisticViewController", function($controller, $scope) {
    $controller('ViewController', {$scope: $scope});

    $scope.main.showBreadcrambs = true;

    $scope.currentProject = Constants.Project.VENUS;
    $scope.currentRelease = Constants.Release.Z3;
    $scope.currentSprint = "Sprint 2";
    $scope.assignedPm = "Dummy User";

    $scope.filterProjects = Constants.Project.list();
    $scope.filterReleases = [Constants.Release.Z1, Constants.Release.Z2, Constants.Release.Z3];
    $scope.currentRelease.url = 'pms.statistic';
    if ($scope.main.breadCrumbItems.indexOf($scope.currentRelease) == -1) {
        $scope.main.breadCrumbItems.push($scope.currentRelease);
        $scope.main.currentBreadCrumbItem = $scope.currentRelease;
    }
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

    $scope.labels = ["07 Jan", "12 Jan", "17 Jan", "22 Jan", "27 Jan", "1 Feb", "6Feb"];
    $scope.series = ['Progress', 'Capacity'];
    $scope.data = [
        [350, 270, 240, 195, 155, 90, 45],
        [350, 320, 240, 210, 160, 110, 50]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});
