MainApp.controller("DevController", function($controller, $scope) {
    $controller('ViewController', {$scope: $scope});

    $scope.filters = [];

    $scope.tasks = [Constants.Task.Task_11, Constants.Task.Task_12, Constants.Task.Task_13, Constants.Task.Task_14, Constants.Task.Task_15];
});
