MainApp.controller("TaskViewController", function($controller, $scope, $stateParams) {
    $controller('ViewController', {$scope: $scope});

    console.log($stateParams)

    var taskId = $stateParams['taskId'];

    $scope.users = Constants.User.list();
    $scope.task = Constants.Task.getTaskById(parseFloat($stateParams['taskId']));

    $scope.checklists = [{name: 'test CL', items: Constants.Item.getItemsByTaskId($scope.task.id)}];

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

    $scope.addNewItem = function(checklist, newItem, newItemForm) {
        newItemForm.committed = true;
        if (!newItemForm.$valid) {
            //newItemForm.committed = false;
            return;
        }
        if (_isAlreadyAdded(checklist, newItem)) {
            alert("Item with such name already added.");
            newItemForm.committed = false;
            return;
        }
        newItem.id = new Date().getTime();
        newItem.taskId = $scope.task.id;
        var item = angular.copy(newItem);
        Constants.Item[newItem.id] = item;
        checklist.items.push(item);
        newItemForm.$setPristine();
        newItem.name = "";
        newItemForm.committed = false;
    };

    var _isAlreadyAdded = function(checklist, item) {
        for (var i = 0; i < checklist.items.length; i++) {
            var obj = checklist.items[i];
            if (obj.name === item.name) return true;
        }
        return false;
    }
});
