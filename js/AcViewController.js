MainApp.controller("AcViewController", function($controller, $scope, $stateParams) {
    $controller('ViewController', {$scope: $scope});

    $scope.main.showBreadcrambs = false;

    var crId = $stateParams['crId'];

    $scope.changeRequest = Constants.CR.getById(parseInt(crId));
    $scope.changeRequest.status = Constants.Status.getStatus($scope.changeRequest.status);

    $scope.init = function() {

    };
});
