MainApp.controller("ViewController", function($scope, $state, $stateParams) {
    $scope.filters = [];

    $scope.users = Constants.User.list();

    $scope.getStatusName = function(statusId) {
        return Constants.Status.getStatus(statusId).name;
    };

    $scope.goToCr = function(cr) {
        $stateParams['crId'] = cr.id;
        $state.transitionTo('pms.cr', $stateParams, {location: true, inherit: true, relative: $state.$current, notify: true});
    };

    $scope.goToTask = function(task) {
        $stateParams['crId'] = parseInt(task.id);
        $stateParams['taskId'] = task.id;
        $state.transitionTo('pms.task', $stateParams, {location: true, inherit: true, relative: $state.$current, notify: true});
    };

    $scope.getAssignedUsers = function(assignedTo) {
        if (!assignedTo) return "";
        return assignedTo.join(", ");
    };

    $scope.updateItemProgress = function(item) {
        item.isCompleted = !item.isCompleted;
    };

    $scope.editItem = function(item, $event, $form) {
        $event.stopPropagation();
        $form.$visible = true;
    };

    $scope.closeEditItem = function($form) {
        $form.$visible = false;
    };
});
