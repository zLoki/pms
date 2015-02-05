var MainApp = angular.module('MainApp', ['ui.router', 'mgcrea.ngStrap']);

MainApp.run(function($rootScope, $state, $stateParams, $location, $q) {

});


MainApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
//    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('pms', {
            url: '',
            abstract: true,
            views: {
                '': {
                    template: '<div ui-view="" />'
                }
            }
        })
        .state('pms.home', {
            url: "/",
            templateUrl: "html/home.html"
        })
        .state('pms.dev', {
            url: "/dev",
            templateUrl: "html/main_dev.html",
            controller: function($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('pms.pm', {
            url: "/pm",
            templateUrl: "html/main_pm.html",
            controller: function($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        });
});