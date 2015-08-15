(function(){
	angular.module('service', ['restangular'])

  .service('SimpleService', function(Restangular, $http){
    this.getWeather = function(){
      //return Restangular.all('http://api.openweathermap.org/data/2.5/weather?q=London,uk').get()
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk');
    }
  });
})();