describe('A simple controller', function(){
  var controller, scope, httpBackend;

  beforeEach(function(){
    module('controller', 'service');
  });

  beforeEach(inject(function($controller, $rootScope, SimpleService, $httpBackend){
    scope = $rootScope.$new();

    httpBackend = $httpBackend;

    $httpBackend.expectGET('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
      .respond({
        one: 'one',
        two: 'two'
      });

    controller = $controller('SimpleController', {
      $scope: scope,
      SimpleService: SimpleService
    })
  }));

  it('should make a call to an api using the SimpleService', function(){
    //scope.$digest();

    httpBackend.flush();

    expect(scope.weather).toEqual({
      one: 'one',
      two: 'two'
    });
  });
});
