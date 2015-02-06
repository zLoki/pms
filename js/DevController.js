MainApp.controller("DevViewController", function($controller, $scope, AccessService) {
    $controller('ViewController', {$scope: $scope});

    $scope.pageSetup.viewType = 'dev';

    AccessService.updateCurrentUser({
        displayName: 'Developer User',
        role: 2
    });

    $scope.reloadBreadCrambs();

    for (var i = 0; i < $scope.main.breadCrumbItems.length; i++) {
        var obj = $scope.main.breadCrumbItems[i];
        if (obj.id == undefined) {
            obj.url = 'pms.dev';
        }
    }
    //$scope.main.breadCrumbItems.filter(function(item) {return item.id == undefined}).url = 'pms.dev';

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

    $scope.trackProgress = function(statistics, log) {
        log["trackedBy"] = "AlexanderShe";
        statistics.push(log);
    };
});
