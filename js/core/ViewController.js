MainApp.controller("ViewController", function($scope) {
    $scope.filters = [];

    $scope.getStatusName = function(statusId) {
        return Constants.Status.getStatus(statusId).name;
    };
});
