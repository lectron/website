angular.module('MinecraftlyAppServices')
    .factory("API", function($http, $localStorage) {
        var APIFactory = {};
        APIFactory.url = '/auth/';
        APIFactory.convertUrl = '/convert';
        //APIFactory.url = '//localhost:8080/';
        APIFactory.login = function(username, password) {
            return $http.post(APIFactory.url + "login", {
                'username': username,
                'password': password
            });
        };
        APIFactory.convertUsernameToUUID = function(username) {
            return $http.get(APIFactory.convertUrl, {
                'username': username
            });
        }
        return APIFactory;

    });
