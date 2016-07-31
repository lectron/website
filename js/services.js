angular.module('MinecraftlyAppServices')
        .factory("API", function ($http, $localStorage) {
            var APIFactory = {};
            APIFactory.url = '/auth/';
            APIFactory.convertUrl = '/auth/convert';
            APIFactory.login = function (username, password) {
                return $http.post(APIFactory.url + "login", {
                    'username': username,
                    'password': password
                });
            };
            APIFactory.convertUUIDToNames = function (uuid) {
                return $http.get(APIFactory.convertUrl, {
                    params: {
                        'uuid': '12345'
                    }
                });
            };
            return APIFactory;

        });
