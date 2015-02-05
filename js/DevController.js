MainApp.controller("DevViewController", function($controller, $scope) {
    $controller('ViewController', {$scope: $scope});

    $scope.main.showBreadcrambs = false;
    //$scope.main.currentBreadCrumbItem = null;
    //$scope.main.breadCrumbItems = [];

    $scope.statuses = Constants.Status.list();
    $scope.filters = {};

    $scope.filters.orderBy = ['name'];

    $scope.currentProject = Constants.Project.VENUS;
    $scope.currentRelease = Constants.Release.Z3;
    $scope.currentSprint = "Sprint 2";
    $scope.assignedPm = "Dummy User";

    $scope.crs = Constants.CR.list();
    $scope.tasks = [].concat(Constants.Task.getMultiRadioList());
});
