MainApp.controller("MainController", function($scope, $state, $stateParams) {
    $scope.pageSetup = {
        viewType: 'unknown'
    };

    $scope.main = {showBreadcrambs: false, currentBreadCrumbItem: null, breadCrumbItems: []};

    var current = {name: 'Main View', url: 'pms.dev'};

    $scope.main.breadCrumbItems.push(current);
    $scope.main.currentBreadCrumbItem = current;

    $scope.reloadBreadCrambs = function() {
        $scope.main.breadCrumbItems = [];
        $scope.main.breadCrumbItems.push(current);
        $scope.main.currentBreadCrumbItem = current;
    };

    $scope.goToBreadCrumbItem = function(item) {
        $scope.main.currentBreadCrumbItem = item;
        var itemIndex = $scope.main.breadCrumbItems.indexOf(item) + 1;
        var breadCrumbSize = $scope.main.breadCrumbItems.length;
        $scope.main.breadCrumbItems.splice(itemIndex, breadCrumbSize - itemIndex);
        $scope.goToState(item.url);
    };

    $scope.goToState = function(state, $event) {
        $state.transitionTo(state, $stateParams);
    };

    $scope.isViewSelected = function(type) {
        return $scope.pageSetup.viewType === type;
    };
});