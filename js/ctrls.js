angular.module('MinecraftlyAppControllers')
        .controller('AppCtrl', function ($scope, $rootScope, API, $localStorage, Intercom, $mdDialog, $mdMedia, $mdSidenav) {
            $scope.$storage = $localStorage;
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
                    templateUrl: 'templates/login.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                        .then(function (answer) {
                        }, function () {
                        });
                $scope.$watch(function () {
                    return $mdMedia('xs') || $mdMedia('sm');
                }, function (wantsFullScreen) {
                    $scope.customFullscreen = (wantsFullScreen === true);
                });
            };
            if ($localStorage.loggedIn == 1 && $localStorage.user && $localStorage.user.name &&$localStorage.user.email && $localStorage.user.uuid) {
                Intercom.boot({
                    name: $localStorage.user.name,
                    email: $localStorage.user.email,
					user_id: $localStorage.user.uuid,
                    created_at: Date.now()
                });
            } else {
                Intercom.boot();
            }
        })
        .controller('mainController', function ($scope) {

        });
