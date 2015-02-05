MainApp.controller("MainController", function($scope, $state, $stateParams) {

    $scope.nvaigationManu = [];

    $scope.viewType = 'dev';

    $scope.goToState = function(state, $event) {
        $state.transitionTo(state, $stateParams);
    };
});