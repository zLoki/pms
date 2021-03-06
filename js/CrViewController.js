MainApp.controller("CrViewController", function($controller, $scope, $stateParams, $http, $httpBackend) {
    $controller('ViewController', {$scope: $scope});

    $scope.main.showBreadcrambs = true;

    var crId = $stateParams['crId'];

    $scope.cr = Constants.CR.getById(parseInt(crId));

    $scope.tasks = $scope.cr ? Constants.Task.getTasksByCrId($scope.cr.id) : [];

    $scope.cr.url = 'pms.cr';
    if ($scope.main.breadCrumbItems.indexOf($scope.cr) == -1) {
        $scope.main.breadCrumbItems.push($scope.cr);
        $scope.main.currentBreadCrumbItem = $scope.cr;
    }

    $scope.editTaskDetails = function(task) {

    };

    $scope.attachFile = function() {
        alert('Attach new file.');
        console.log($httpBackend);
        //$httpBackend.when("GET", "/api/attach").respond([{}, {}, {}]);
        //$httpBackend.expectGET('/attach');
        //$httpBackend.flush();
        //$http.get('/api/attach').success(function(data, status, headers) {
        //    console.log(data);
        //});
    };

    $scope.downloadAttachment = function(attachment) {
        alert('download file');
    };

    $scope.removeAttachment = function(attachment) {
        $scope.cr.attachments.splice($scope.cr.attachments.indexOf(attachment), 1);
    };

    $scope.addNewItem = function(newItem, newItemForm) {
        newItemForm.committed = true;
        if (!newItemForm.$valid) {
            //newItemForm.committed = false;
            return;
        }
        if ($scope._isAlreadyAdded($scope.tasks, newItem)) {
            alert("Item with such name already added.");
            newItemForm.committed = false;
            return;
        }
        var timestamp = new Date().getTime();
        newItem.id = $scope.cr.id + timestamp / Math.pow(10, (timestamp + '').length);;
        var item = angular.copy(newItem);
        Constants.Task[newItem.id] = item;
        $scope.tasks.push(item);
        newItemForm.$setPristine();
        newItem.name = "";
        newItemForm.committed = false;
    };
});