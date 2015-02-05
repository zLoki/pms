MainApp.controller("DevViewController", function($controller, $scope) {
    $controller('ViewController', {$scope: $scope});

    $scope.main.showBreadcrambs = false;
    $scope.main.currentBreadCrumbItem = null;
    $scope.main.breadCrumbItems = [];

    $scope.filters = [];

    $scope.crs = Constants.CR.list();
    $scope.tasks = [].concat(Constants.Task.getMultiRadioList()).concat(Constants.Task.getChecklistBuilderList());
});
