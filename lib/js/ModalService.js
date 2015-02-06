SiMainApp.provider('$pmsModals', function() {
    var defaults = this.defaults = {
        animation: 'am-fade',
        backdropAnimation: 'am-fade',
        prefixClass: 'modal',
        prefixEvent: 'modal',
        placement: 'top',
        template: 'modal/modal.tpl.html',
        contentTemplate: false,
        container: false,
        element: null,
        backdrop: 'static',
        keyboard: true,
        html: false,
        show: false
    };
    var errorModalOptions = {
        title: 'Error',
        template: APPLICATION_URL_PREFIX + 'html/modalDialogs/error.dialog.tmpl.html',
        windowClass: 'cronos-modal cronos-error-modal'
    };

    var infoModalOptions = {
        title: 'Information',
        template: APPLICATION_URL_PREFIX + 'html/modalDialogs/info.dialog.tmpl.html',
        windowClass: 'cronos-modal cronos-info-modal'
    };

    var warningModalOptions = {
        title: 'Confirm',
        template: APPLICATION_URL_PREFIX + 'html/modalDialogs/warning.dialog.tmpl.html',
        windowClass: 'cronos-modal cronos-warning-modal'
    };


    this.$get = ['$modal', '$q', '$rootScope', '$controller', '$injector', function ($modal, $q, $rootScope, $controller, $injector) {
        function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function (value, key) {
                if (angular.isFunction(value) || angular.isArray(value)) {
                    promisesArr.push($q.when($injector.invoke(value)));
                }
            });
            return promisesArr;
        }

        return {
            confirm: function (config) {
                var options = angular.extend({}, defaults, warningModalOptions, config);
                options.scope = options.scope && options.scope.$new() || $rootScope.$new();
                var deferred;

                options.scope.confirm = function(res) {
                    deferred.resolve(res);
                    dialog.hide();
                };
                var dialog = $modal(options);

                var parentShow = dialog.show;

                dialog.show = function() {
                    deferred = $q.defer();
                    parentShow();
                    return deferred.promise;
                };

                dialog.close = function(res) {
                    deferred.resolve(res);
                    dialog.hide();
                };

                dialog.dismiss = function() {
                    dialog.hide();
                };

                return dialog.$promise.then(dialog.show);
            },
            info: function (config) {
                var options = angular.extend({}, defaults, infoModalOptions, config);
                options.scope = options.scope && options.scope.$new() || $rootScope.$new();
                var deferred;

                options.scope.confirm = function(res) {
                    deferred.resolve(res);
                    dialog.hide();
                };
                var dialog = $modal(options);

                var parentShow = dialog.show;

                dialog.show = function() {
                    deferred = $q.defer();
                    parentShow();
                    return deferred.promise;
                };

                dialog.close = function(res) {
                    deferred.resolve(res);
                    dialog.hide();
                };

                dialog.dismiss = function() {
                    dialog.hide();
                };

                return dialog.$promise.then(dialog.show);
            },
            error: function (config) {
                var options = angular.extend({}, defaults, errorModalOptions, config);
                options.scope = options.scope && options.scope.$new() || $rootScope.$new();
                var deferred;

                options.scope.confirm = function(res) {
                    deferred.resolve(res);
                    dialog.hide();
                };
                var dialog = $modal(options);

                var parentShow = dialog.show;

                dialog.show = function() {
                    deferred = $q.defer();
                    parentShow();
                    return deferred.promise;
                };

                dialog.close = function(res) {
                    deferred.resolve(res);
                    dialog.hide();
                };

                dialog.dismiss = function() {
                    dialog.hide();
                };

                return dialog.$promise.then(dialog.show);
            },
            custom: function (config) {
                var deferred;
                var options = angular.extend({}, defaults, errorModalOptions, config);
                options.scope = options.scope && options.scope.$new() || $rootScope.$new();
                options.scope.windowClass = (options.windowClass) ? options.windowClass : '';

                var dialog = $modal(options);

                var parentShow = dialog.show;
                dialog.show = function() {
                    deferred = $q.defer();

                    var resolvePromise = $q.all(getResolvePromises(options.resolve));

                    resolvePromise.then(function resolveSuccess(vars) {
                        log('resolveSuccess')
                        log(arguments)
                        var ctrlLocals = {};
                        var resolveIter = 0;

                        //controllers
                        if (options.controller) {
                            ctrlLocals.$scope = options.scope;
                            ctrlLocals.$modalInstance = dialog;
                            angular.forEach(options.resolve, function (value, key) {
                                ctrlLocals[key] = vars[resolveIter++];
                            });

                            $controller(options.controller, ctrlLocals);
                        }

                        parentShow();
                    }, function resolveError(reason) {
                        log('resolveError')
                        log(reason)
                    });

                    return deferred.promise;
                };

                dialog.close = function(res) {
                    deferred.resolve(res);
                    dialog.hide();
                };

                dialog.dismiss = function() {
                    deferred.reject(arguments);
                    dialog.hide();
                };

                return dialog.$promise.then(dialog.show);
            }
        };
    }];
    return this;
});