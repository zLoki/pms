MainApp.controller("ViewController", function($scope, $state, $stateParams) {
    $scope.filters = [];

    $scope.getStatusName = function(statusId) {
        return Constants.Status.getStatus(statusId).name;
    };

    $scope.goToTask = function(task) {
        $stateParams['taskId'] = task.id;
        $state.transitionTo('pms.task', $stateParams, {location: true, inherit: true, relative: $state.$current, notify: true});
    };
});
