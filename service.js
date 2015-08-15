(function(){
	angular.module('service', ['restangular'])

  .service('SimpleService', function(Restangular, $http, $q){
    this.getWeather = function(){
      var deferred = $q.defer();

      $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
        .then(function(response){
          deferred.resolve(response.data);
        });

      return deferred.promise;
    }
  });
})();
