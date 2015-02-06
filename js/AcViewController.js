MainApp.controller("AcViewController", function($controller, $scope, $stateParams) {
    $controller('ViewController', {$scope: $scope});

    $scope.main.showBreadcrambs = false;

    $scope.init = function() {
        $scope.initParams();
        angular.forEach(Constants.AcceptanceCriteria.list(), function(ac) {
            ac.comments = [];
            ac.status = Constants.ACStatus.getStatus(ac.status);
            if (ac.status.id == Constants.ACStatus.FAILED.id) ac.comments.push($scope.defaultComment);
            $scope.acList.push(ac);
        });
    };

    $scope.initParams = function() {
        $scope.changeRequest = Constants.CR.getById(parseInt($stateParams['crId']));
        $scope.changeRequest.status = Constants.Status.getStatus($scope.changeRequest.status);
        $scope.changeRequest.priority = Constants.Priority.getPriority($scope.changeRequest.priority);
        $scope.acList = [];

        $scope.acStatuses = Constants.ACStatus.list();
        $scope.defaultCriteria = {
            id: null,
            name: null,
            status: Constants.ACStatus.NEW,
            comments: []
        };

        $scope.defaultComment = {
            status: Constants.ACStatus.FAILED.name,
            content: "While file is locked within File Manager, delete button is still showing on Checklist as disabled, when it should be hidden totally.",
            creator: "Padmashree Chougule"
        };
    };

    $scope.initStatusUpdatePopup = function (ac) {
        $scope.acDetails = {criteria: ac, status: ac.status, comment: null};
    };

    $scope.addCriteria = function() {
        var newCriteria = angular.copy($scope.defaultCriteria);
        newCriteria.id = $scope.acList.length;
        $scope.acList.push(newCriteria);
        $scope.defaultCriteria.name = null;
    };

    $scope.updateCriteria = function(ac) {
        ac.status = $scope.acDetails.status;
        ac.comments.push({status: $scope.acDetails.status.name, content: $scope.acDetails.comment, creator: "John Smith"});
    }
});
