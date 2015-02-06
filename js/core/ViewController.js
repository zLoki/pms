MainApp.controller("ViewController", function($scope, $state, $stateParams, AccessService) {
    $scope.pageSetup = {
        viewType: 'unknown'
    };

    $scope.filters = [];

    $scope.users = Constants.User.list();

    $scope.getStatusName = function(statusId) {
        return Constants.Status.getStatus(statusId).name;
    };

    $scope.goToCr = function(cr) {
        $stateParams['crId'] = cr.id;
        $state.transitionTo('pms.cr', $stateParams, {location: true, inherit: true, relative: $state.$current, notify: true});
    };

    $scope.goToCrDetails = function(cr) {
        $stateParams['crId'] = cr.id;
        $state.transitionTo('pms.details', $stateParams, {location: true, inherit: true, relative: $state.$current, notify: true});
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

    $scope.canEdit = function() {
        return AccessService.getCurrentUser().role != 1 &&  AccessService.getCurrentUser().role != 0;
    };

    $scope.updateItemProgress = function(item) {
        if (!$scope.canEdit()) return;
        item.isCompleted = !item.isCompleted;
    };

    $scope.editItem = function(item, $event, $form) {
        if (!$scope.canEdit()) return;
        if ($event && angular.isFunction($event)) $event.stopPropagation();
        $form.$visible = true;
    };

    $scope.closeEditItem = function($form) {
        $form.$visible = false;
    };

    $scope._isAlreadyAdded = function(items, item) {
        for (var i = 0; i < items.length; i++) {
            var obj = items[i];
            if (obj.name === item.name) return true;
        }
        return false;
    };

    $scope.calculateWeightAvarage = function(item) {
        return Math.round((item.min + item.max + 4*item.likely)/6.1);
    };

    $scope.calculateEstimate = function(changeRequest) {
        var result = 0;
        for (var i = 0; i < changeRequest.tasks.length; i++) {
            result += parseFloat(changeRequest.tasks[i].estimate) ;
        }
        return result;
    };

    $scope.calculateSpentTime = function(changeRequest) {
        var result = 0;
        for (var i = 0; i < changeRequest.tasks.length; i++) {
            result += parseFloat(changeRequest.tasks[i].spent) ;
        }
        return result;
    };

    $scope.calculateHeartBeatByCr = function(cr) {
        var total = 0;
        for (var i = 0; i < cr.tasks.length; i++) {
            total += $scope.calculateHeartBeatByTask(cr.tasks[i]);
        }
        return total;
    };

    $scope.calculateHeartBeatByTask = function(task) {
        return (task.remaining +  task.spent) - task.estimate;
    };

    $scope.trackProgress = function(task, log) {
        log.estimateRemaining = log.estimateRemaining ? log.estimateRemaining : 0;
        log.actValue = log.actValue ? log.actValue :0;

        if (!log.estimateRemaining && !log.actValue) return;

        var users = Constants.User.list();
        log["trackedBy"] = users[Math.floor(Math.random() * users.length)];
        if (!log.date) log.date = new Date().getTime();
        //if (!log.date) log.date = $filter("date")(new Date(), "dd MMM yyyy");
        task.remaining -= log.estimateRemaining;
        task.spent += log.actValue;
        task.statistics.push(angular.copy(log));
    };
});
