MainApp.controller("AcViewController", function($controller, $scope, $stateParams, blockUI) {
    $controller('ViewController', {$scope: $scope});

    $scope.main.showBreadcrambs = false;

    $scope.init = function() {
        $scope.initParams();
        angular.forEach(Constants.AcceptanceCriteria.list(), function(ac) {
            ac.status = Constants.ACStatus.getStatus(ac.status);
            if (ac.comments.length) {
                angular.forEach(ac.comments, function(item) {
                    item.status = Constants.ACStatus.getStatus(item.status);
                })
            }
            $scope.acList.push(ac);
        });
    };

    $scope.initParams = function() {
        $scope.mainBlockUI = blockUI.instances.get('mainBlockUI');
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
    };

    $scope.initStatusUpdatePopup = function (ac) {
        $scope.mainBlockUI.start();
        $scope.acDetails = {criteria: ac, status: ac.status, comment: null};
    };

    $scope.addCriteria = function() {
        var newCriteria = angular.copy($scope.defaultCriteria);
        newCriteria.id = $scope.acList.length;
        $scope.acList.push(newCriteria);
        $scope.defaultCriteria.name = null;
    };

    $scope.updateCriteria = function(ac) {
        $scope.mainBlockUI.stop();
        ac.status = $scope.acDetails.status;
        ac.comments.push({status: $scope.acDetails.status.name, content: $scope.acDetails.comment, creator: "John Smith"});
    };

    $scope.downloadAttachment = function() {
        alert('Nice try!');
    }
});
