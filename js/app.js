var dependencies = [
    'ui.router',
    'ngAnimate',
    'ngMaterial',
    'mdl',
    'ngIntercom',
    'ngStorage',
    'MinecraftlyAppControllers',
    'MinecraftlyAppServices'
];
angular.module("MinecraftlyAppControllers", []);
angular.module("MinecraftlyAppServices", []);
angular.module('MinecraftlyApp', dependencies)
        .run(function ($window) {
        })
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider, IntercomProvider) {
            IntercomProvider.init('t02jhyr0');
            $locationProvider.html5Mode(true);
            $stateProvider
                    .state('app', {
                        url: "",
                        abstract: true,
                        templateUrl: "templates/app.html",
                        controller: 'AppCtrl'
                    })
            .state('app.home', {
                        cache: false,
                        url: "/",
                        views: {
                            'appContent': {
                                templateUrl: "templates/home.html",
                                controller: 'mainController'
                            }
                        }
                    })
			.state('app.play', {
                        cache: false,
                        url: "/play",
                        views: {
                            'appContent': {
                                templateUrl: "templates/play.html",
                                controller: 'mainController'
                            }
                        }
                    })
			.state('app.vote', {
                        cache: false,
                        url: "/vote",
                        views: {
                            'appContent': {
                                templateUrl: "templates/vote.html",
                                controller: 'mainController'
                            }
                        }
                    })
			.state('app.team', {
                        cache: false,
                        url: "/team",
                        views: {
                            'appContent': {
                                templateUrl: "templates/team.html",
                                controller: 'mainController'
                            }
                        }
                    })
			.state('app.about', {
                        cache: false,
                        url: "/about",
                        views: {
                            'appContent': {
                                templateUrl: "templates/about.html",
                                controller: 'mainController'
                            }
                        }
                    })
			.state('app.education', {
                        cache: false,
                        url: "/education",
                        views: {
                            'appContent': {
                                templateUrl: "templates/education.html",
                                controller: 'mainController'
                            }
                        }
                    })
			.state('app.jobs', {
                        cache: false,
                        url: "/jobs",
                        views: {
                            'appContent': {
                                templateUrl: "templates/jobs.html",
                                controller: 'mainController'
                            }
                        }
                    })
			.state('app.terms', {
                        cache: false,
                        url: "/terms",
                        views: {
                            'appContent': {
                                templateUrl: "templates/terms.html",
                                controller: 'mainController'
                            }
                        }
                    })
			.state('app.privacy', {
                        cache: false,
                        url: "/privacy",
                        views: {
                            'appContent': {
                                templateUrl: "templates/privacy.html",
                                controller: 'mainController'
                            }
                        }
                    })
			.state('app.login', {
                        cache: false,
                        url: "/login",
                        views: {
                            'appContent': {
                                templateUrl: "templates/login.html",
                                controller: 'mainController'
                            }
                        }
                    })
			.state('app.faq', {
                        cache: false,
                        url: "/faq",
                        views: {
                            'appContent': {
                                templateUrl: "templates/faq.html",
                                controller: 'mainController'
                            }
                        }
                    })
			.state('app.login', {
                        cache: false,
                        url: "/login",
                        views: {
                            'appContent': {
                                templateUrl: "templates/in.html",
                                controller: 'mainController'
                            }
                        }
                    })
		    .state('app.features', {
                        cache: false,
                        url: "/features",
                        views: {
                            'appContent': {
                                templateUrl: "templates/features.html",
                                controller: 'mainController'
                            }
                        }
                    });
            $urlRouterProvider.otherwise('/');
        });
        
