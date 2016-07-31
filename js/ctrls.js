angular.module('MinecraftlyAppControllers')
        .controller('AppCtrl', function ($scope, $rootScope, API, $localStorage, Intercom, $mdDialog, $mdMedia, $mdSidenav, $state, $mdToast) {
            $scope.$storage = $localStorage;
            $rootScope.$on('$viewContentLoaded', function () {
                window.scrollTo(0, 0);
            });
            $scope.openMenu = function () {
                $mdSidenav("leftNav").toggle();
            };
            $scope.logout = function () {
                $localStorage.loggedIn = 0;
                $localStorage.user = {};
            };
            $localStorage.loading = 0;
            $localStorage.loggedIn = $localStorage.loggedIn || 0;
            $localStorage.user = $localStorage.user || {};
            $scope.showLogin = function (ev) {
                $mdSidenav("leftNav").close();
                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
                $mdDialog.show({
                    controller: function ($scope, $localStorage, $rootScope, $mdDialog) {
                        $scope.user = {};
                        $scope.cancel = function () {
                            $mdDialog.cancel();
                        }
                        $scope.login = function () {
                            $localStorage.loading = 1;
                            API.login($scope.user.email, $scope.user.password).then(function (resp) {
                                $localStorage.loading = 0;
                                if (resp.data.availableProfiles.length > 0) {
                                    $localStorage.loggedIn = 1;
                                    $localStorage.user = {};
                                    $localStorage.user.uuid = resp.data.availableProfiles[0].id;
                                    $localStorage.user.name = resp.data.availableProfiles[0].name;
                                    $localStorage.user.email = $scope.user.email;
                                    $mdDialog.cancel();
                                    Intercom.boot({
                                        name: $localStorage.user.name,
                                        email: $localStorage.user.email,
                                        user_id: $localStorage.user.uuid,
                                        created_at: Date.now()
                                    });
                                } else {
                                    $mdDialog.show(
                                            $mdDialog.alert()
                                            .parent(angular.element(document.querySelector('body')))
                                            .clickOutsideToClose(true)
                                            .title('Login failed!')
                                            .textContent('Incorrect username and/or password.')
                                            .ariaLabel('Login failed!')
                                            .ok('OK')
                                            .targetEvent(ev)
                                            );
                                }

                            }, function (j, t, a) {
                                $localStorage.loading = 0;

                                $mdDialog.show(
                                        $mdDialog.alert()
                                        .parent(angular.element(document.querySelector('body')))
                                        .clickOutsideToClose(true)
                                        .title('Login failed!')
                                        .textContent('Incorrect username and/or password.')
                                        .ariaLabel('Login failed!')
                                        .ok('OK')
                                        .targetEvent(ev)
                                        );
                            });

                        };
                    },
                    templateUrl: 'templates/login-popup.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                        .then(function (answer) {}, function () {});
                $scope.$watch(function () {
                    return $mdMedia('xs') || $mdMedia('sm');
                }, function (wantsFullScreen) {
                    $scope.customFullscreen = (wantsFullScreen === true);
                });
            };
            if ($localStorage.loggedIn == 1 && $localStorage.user && $localStorage.user.name && $localStorage.user.email && $localStorage.user.uuid) {
                Intercom.boot({
                    name: $localStorage.user.name,
                    email: $localStorage.user.email,
                    user_id: $localStorage.user.uuid,
                    //created_at: Date.now()
                });
            } else {
                Intercom.boot();
            }
            $scope.loginOrlogout = function () {
                if ($localStorage.loggedIn == 1) {
                    $scope.logout();
                    $mdToast.show(
                            $mdToast.simple()
                            .textContent('You have been logged out!')
                            .position('bottom right')
                            .hideDelay(3000)
                            );
                } else {
                    $state.go('app.login');
                }
            };

        })
        .controller('mainController', function ($scope) {

        })
        .controller('profileController', function ($scope, $stateParams, API) {
            $scope.uuid = $stateParams.uuid;
            API.convertUUIDToNames($stateParams.uuid).then(function (data) {
		console.log(data);
                if (data.length > 0) {
                    $scope.name = data[data.length - 1].name;
                } else {
                    $scope.name = "Unknown";
                }
            }, function (r) {
                console.log(r);
            });
        })
        .controller('loginController', function ($scope, $state, $localStorage, API, $mdDialog, Intercom, $mdToast) {
            $scope.$on('$viewContentLoaded', function (event, data) {
                if ($localStorage.loggedIn == 1) {
                    $state.go('app.uuid', {uuid: $localStorage.user.uuid});
                }
            });
            $scope.user = {};
            $scope.login = function () {
                $localStorage.loading = 1;
                API.login($scope.user.email, $scope.user.password).then(function (resp) {
                    $localStorage.loading = 0;
                    if (resp.data.availableProfiles.length > 0) {
                        $localStorage.loggedIn = 1;
                        $localStorage.user = {};
                        $localStorage.user.uuid = resp.data.availableProfiles[0].id;
                        $localStorage.user.name = resp.data.availableProfiles[0].name;
                        $localStorage.user.email = $scope.user.email;
                        $mdDialog.cancel();
                        Intercom.boot({
                            name: $localStorage.user.name,
                            email: $localStorage.user.email,
                            user_id: $localStorage.user.uuid,
                            created_at: Date.now()
                        });
                        $mdToast.show(
                                $mdToast.simple()
                                .textContent('You have been logged in!')
                                .position('bottom right')
                                .hideDelay(3000)
                                );
                        $state.go('app.uuid', {username: $localStorage.user.uuid});
                    } else {
                        $mdDialog.show(
                                $mdDialog.alert()
                                .parent(angular.element(document.querySelector('body')))
                                .clickOutsideToClose(true)
                                .title('Login failed!')
                                .textContent('Incorrect username and/or password.')
                                .ariaLabel('Login failed!')
                                .ok('OK')
                                );
                    }

                }, function (j, t, a) {
                    $localStorage.loading = 0;

                    $mdDialog.show(
                            $mdDialog.alert()
                            .parent(angular.element(document.querySelector('body')))
                            .clickOutsideToClose(true)
                            .title('Login failed!')
                            .textContent('Incorrect username and/or password.')
                            .ariaLabel('Login failed!')
                            .ok('OK')
                            );
                });

            };
        });
