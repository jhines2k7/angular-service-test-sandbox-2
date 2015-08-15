describe('A simple directive', function(){
  var element, scope;

  beforeEach(function(){
    module('directive');
  });

  beforeEach(inject(function($compile, $rootScope){
    scope = $rootScope.$new();

    element = $compile('<simple-directive></simple-directive>')(scope);

    scope.$digest();
  }));

  it('should render a very simple directive', function(){
    expect(element.html()).toBe('<h1>Big Shot</h1>');
  });
});
