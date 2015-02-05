MainApp.controller("DevViewController", function($controller, $scope) {
    $controller('ViewController', {$scope: $scope});

    $scope.filters = [];

    $scope.crs = Constants.CR.list();
    $scope.tasks = [].concat(Constants.Task.getMultiRadioList()).concat(Constants.Task.getChecklistBuilderList());
});
