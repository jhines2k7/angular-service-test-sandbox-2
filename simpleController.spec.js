describe('A simple controller', function(){
  var controller, scope, q;

  beforeEach(function(){
    module('controller', 'service');
  });

  beforeEach(inject(function($controller, $rootScope, SimpleService, $q){
    scope = $rootScope.$new();
    q = $q;

    spyOn(SimpleService, 'getWeather').and.callFake(function(){
      var deferred = q.defer();

      deferred.resolve({
        data: {
          one: 'one',
          two: 'two'
        }
      });

      return deferred.promise;
    });

    controller = $controller('SimpleController', {
      $scope: scope
    })
  }));

  it('should make a call to an api using the SimpleService', function(){
    scope.$digest();

    expect(scope.weather).toEqual({
      one: 'one',
      two: 'two'
    });
  });
});
