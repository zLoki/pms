MainApp.controller("TaskViewController", function($controller, $scope, $stateParams) {
    $controller('ViewController', {$scope: $scope});

    console.log($stateParams)

    $scope.users = Constants.User.list();
    $scope.task = Constants.Task.getTaskById(parseFloat($stateParams['taskId']));

    console.log();

    $scope.checklists = [{name: 'test CL', items: [Constants.Item.Item_11, Constants.Item.Item_12, Constants.Item.Item_13, Constants.Item.Item_14]}];

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
        checklist.items.push(angular.copy(newItem));
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
