'use strict';
/* Services */
angular
    .module('MainApp')
    .factory('CardService', ['$http', '$q', CardService]);

function CardService($http, $q) {

    var path = "";
    var factory = {};
    var deferred = $q.defer();

   
    //Save Archive Post Notes
    factory.getCardTitle = function (id) {


       
        path = 'https://jsonplaceholder.typicode.com/posts/';
        path += '?id=' + id;


        var deferred = $q.defer();
        return $http.get( path).then(function (response) {

            deferred.resolve(response);

            return deferred.promise;

        }, function (response) {

            deferred.reject(response);

            return deferred.promise;

        });
    };



    return factory;

};