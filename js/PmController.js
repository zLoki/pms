MainApp.controller("PmViewController", function($controller, $scope, AccessService) {
    $controller('ViewController', {$scope: $scope});

    $scope.pageSetup.viewTyp = 'pm';

    AccessService.updateCurrentUser({
        displayName: 'PM User',
        role: 3
    });

    $scope.reloadBreadCrambs();

    for (var i = 0; i < $scope.main.breadCrumbItems.length; i++) {
        var obj = $scope.main.breadCrumbItems[i];
        if (obj.id == undefined) {
            obj.url = 'pms.pm';
        }
    }

    $scope.main.showBreadcrambs = false;
    //$scope.main.currentBreadCrumbItem = null;
    //$scope.main.breadCrumbItems = [];

    $scope.filterProjects = Constants.Project.list();
    $scope.filterReleases = [Constants.Release.Z1, Constants.Release.Z2, Constants.Release.Z3];

    $scope.tasks = [{id: "569.1", name: "GUI Design and Logic", status: "1", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        {id: "569.2", name: "Adjust functionality to customize CL items and AFs per CL (not WP)", status: "2", estimate: "", spent: "", forecastStart: "", forecastEnd: ""}];

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
