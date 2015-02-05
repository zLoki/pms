MainApp.controller("PmViewController", function($controller, $scope) {
    $controller('ViewController', {$scope: $scope});

    $scope.filterProjects = Constants.Project.list();
    $scope.filterReleases = [Constants.Release.Z1, Constants.Release.Z2, Constants.Release.Z3];

    $scope.tasks = [{id: "569.1", name: "GUI Design and Logic", status: "1", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        {id: "569.2", name: "Adjust functionality to customize CL items and AFs per CL (not WP)", status: "2", estimate: "", spent: "", forecastStart: "", forecastEnd: ""}];

    $scope.init = function() {
        $scope.changeRequests = Constants.CR.list();
    };
});
