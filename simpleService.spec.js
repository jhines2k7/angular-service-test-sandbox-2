describe('A simple service', function(){
  var simpleService, httpBackend, scope;

  beforeEach(function(){
    module('service')
  });

  beforeEach(inject(function(SimpleService, $httpBackend){
    httpBackend = $httpBackend;

    simpleService = SimpleService;
  }));

  it('should call the weather service api', function(){
    httpBackend.expectGET('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
      .respond({
        one: 'one',
        two: 'two'
      });

    var weather = {};

    simpleService.getWeather().then(function(response){
      weather = response.data;
    });

    httpBackend.flush();

    expect(weather).toEqual({
      one: 'one',
      two: 'two'
    });
  });

  it('should report any errors', function(){
    httpBackend.expectGET('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
      .respond(500, '', '', 'Internal server error');

    var weather = {};

    simpleService.getWeather()
      .then(function(response){
        weather = response.data;
      })
      .catch(function(err){
        weather = err.statusText;
      });

    httpBackend.flush();

    expect(weather).toEqual('Internal server error');
  })
});
