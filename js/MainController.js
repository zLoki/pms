MainApp.controller("MainController", function($scope, $state, $stateParams) {

    $scope.main = {showBreadcrambs: false, currentBreadCrumbItem: null, breadCrumbItems: []};

    var current = {name: 'Main View', url: 'pms.dev'};

    $scope.main.breadCrumbItems.push(current);
    $scope.main.currentBreadCrumbItem = current;

    $scope.goToBreadCrumbItem = function(item) {
        $scope.main.currentBreadCrumbItem = item;
        var itemIndex = $scope.main.breadCrumbItems.indexOf(item) + 1;
        console.log(item)
        console.log(itemIndex)
        var breadCrumbSize = $scope.main.breadCrumbItems.length;
        $scope.main.breadCrumbItems.splice(itemIndex, breadCrumbSize - itemIndex);
        $scope.goToState(item.url);
    };

    $scope.viewType = 'dev';

    $scope.goToState = function(state, $event) {
        $state.transitionTo(state, $stateParams);
    };
});