var MainApp = angular.module('MainApp', ["chart.js", 'ui.router', 'mgcrea.ngStrap']);

MainApp.run(function($rootScope, $state, $stateParams, $location, $q) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        //console.log('$stateChangeStart');
        //console.log(arguments);
    });
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
            templateUrl: "html/home.html",
            controller: 'MainController'
        })
        .state('pms.dev', {
            url: "/dev",
            templateUrl: "html/main_dev.html",
            controller: 'DevViewController'
        })
        .state('pms.pm', {
            url: "/pm",
            templateUrl: "html/main_pm.html",
            controller: 'PmViewController'
        })
        .state('pms.business', {
            url: "/business",
            templateUrl: "html/main_pm.html",
            controller: 'BusinessViewController'
        })
        .state('pms.statistic', {
            url: "/statistic",
            templateUrl: "html/statistics.html",
            controller: 'StatisticViewController'
        })
        .state('pms.ac', {
            url: "/pm/cr/:crId",
            templateUrl: "html/ac_details.html",
            controller: 'AcViewController'
        })
        .state('pms.cr', {
            url: "/cr/:crId",
            templateUrl: "html/cr_details.html",
            controller: 'CrViewController'
        })
        .state('pms.task', {
            url: "/cr/:crId/task/:taskId",
            templateUrl: "html/task.html",
            controller: 'TaskViewController'
        });
});