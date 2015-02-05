MainApp.controller("CrViewController", function($controller, $scope, $stateParams) {
    $controller('ViewController', {$scope: $scope});

    var crId = $stateParams['crId'];

    $scope.cr = Constants.CR.getById(parseInt(crId));

    $scope.tasks = $scope.cr ? Constants.Task.getTasksByCrId($scope.cr.id) : [];
});