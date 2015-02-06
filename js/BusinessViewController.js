MainApp.controller("BusinessViewController", function($controller, $scope, AccessService) {
    $controller('ViewController', {$scope: $scope});

    $scope.pageSetup.viewType = 'business';

    AccessService.updateCurrentUser({
        displayName: 'Business User',
        role: 1
    });

    $scope.reloadBreadCrambs();

    for (var i = 0; i < $scope.main.breadCrumbItems.length; i++) {
        var obj = $scope.main.breadCrumbItems[i];
        if (obj.id == undefined) {
            obj.url = 'pms.business';
        }
    }

    $scope.main.showBreadcrambs = false;

    $scope.filterProjects = Constants.Project.list();
    $scope.filterReleases = [Constants.Release.Z1, Constants.Release.Z2, Constants.Release.Z3];

    $scope.changeRequests = Constants.CR.list();

});