describe('A simple service', function(){
  var simpleService, scope, q;

  beforeEach(function(){
    module('service')
  });

  beforeEach(inject(function(SimpleService, $q, $rootScope){
    simpleService = SimpleService;
    q = $q;
    scope = $rootScope.$new();
  }));

  it('should call the weather service api', function(){
    spyOn(simpleService, 'getWeather').and.callFake(function(){
      var deferred = q.defer();

      deferred.resolve({
        data: {
          one: 'one',
          two: 'two'
        }
      });

      return deferred.promise;
    });

    var weather = {};

    simpleService.getWeather().then(function(response){
      weather = response.data;
    });

    scope.$digest();

    expect(weather).toEqual({
      one: 'one',
      two: 'two'
    });
  });

  it('should report any errors', function(){
    spyOn(simpleService, 'getWeather').and.callFake(function(){
      var deferred = q.defer();

      deferred.reject({
        statusText: 'Internal server error'
      });

      return deferred.promise;
    });

    var weather = {};

    simpleService.getWeather()
      .then(function(response){
        weather = response.data;
      })
      .catch(function(err){
        weather = err.statusText;
      });

    scope.$digest();

    expect(weather).toEqual('Internal server error');
  })
});
