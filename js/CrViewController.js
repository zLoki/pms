MainApp.controller("CrViewController", function($controller, $scope, $stateParams) {
    $controller('ViewController', {$scope: $scope});

    $scope.main.showBreadcrambs = true;

    var crId = $stateParams['crId'];

    $scope.cr = Constants.CR.getById(parseInt(crId));

    $scope.tasks = $scope.cr ? Constants.Task.getTasksByCrId($scope.cr.id) : [];

    $scope.cr.url = 'pms.cr';
    if ($scope.main.breadCrumbItems.indexOf($scope.cr) == -1) {
        $scope.main.breadCrumbItems.push($scope.cr);
        $scope.main.currentBreadCrumbItem = $scope.cr;
    }
});