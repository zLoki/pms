MainApp.controller("TaskViewController", function($controller, $scope) {
    $controller('ViewController', {$scope: $scope});

    $scope.task = Constants.Task.Task_11;

    $scope.checklists = [{name: 'test CL', items: [Constants.Item.Item_11, Constants.Item.Item_12, Constants.Item.Item_13, Constants.Item.Item_14]}];

    $scope.updateItemProgress = function(item) {
        item.isCompleted = !item.isCompleted;
    };

    $scope.addNewItem = function(checklist, newItem) {
        checklist.items.push(newItem);
    };
});
