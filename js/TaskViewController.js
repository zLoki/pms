MainApp.controller("TaskViewController", function($controller, $scope, $stateParams) {
    $controller('ViewController', {$scope: $scope});

    $scope.main.showBreadcrambs = true;

    var taskId = $stateParams['taskId'];

    $scope.task = taskId ? Constants.Task.getTaskById(parseFloat(taskId)) : {};

    $scope.task.url = 'pms.task';
    if ($scope.main.breadCrumbItems.indexOf($scope.task) == -1) {
        $scope.main.breadCrumbItems.push($scope.task);
        $scope.main.currentBreadCrumbItem = $scope.task;
    }

    $scope.checklists = [{name: 'test CL', items: Constants.Item.getItemsByTaskId($scope.task.id)}];

    $scope.editItemDetails = function(item) {
        item.editDetails = true;
    };

    $scope.closeEditItemDetails = function(item, forms) {
        item.editDetails = false;

        for (var i = 0; i < forms.length; i++) {
            $scope.closeEditItem(forms[i]);
        }
    };

    $scope.removeItem = function(item) {

    };

    $scope.addNewItem = function(checklist, newItem, newItemForm) {
        newItemForm.committed = true;
        if (!newItemForm.$valid) {
            //newItemForm.committed = false;
            return;
        }
        if ($scope._isAlreadyAdded(checklist.items, newItem)) {
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


});
