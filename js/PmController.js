MainApp.controller("PmController", function($controller, $scope) {
    $controller('ViewController', {$scope: $scope});

    $scope.filters = [];

    $scope.tasks = [{id: "569.1", name: "GUI Design and Logic", status: "1", estimate: "", spent: "", forecastStart: "", forecastEnd: ""},
        {id: "569.2", name: "Adjust funtionality to customize CL items and AFs per CL (not WP)", status: "2", estimate: "", spent: "", forecastStart: "", forecastEnd: ""}];
});
