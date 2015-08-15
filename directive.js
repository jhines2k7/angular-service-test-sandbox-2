(function(){
    angular.module('directive', [])
        .directive('simpleDirective', function(){
            return {
                restrict: 'E',
                template: '<h1>Big Shot</h1>',
                link: function(scope){

                }
            }
        })
})();