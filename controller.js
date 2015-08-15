(function(){
    angular.module('controller', [])

        .controller('SimpleController', function($scope, $http, SimpleService){
            $scope.weather = {};

            SimpleService.getWeather()
                .then(function(response){
                    $scope.weather = response.data;
                })
        })
})();