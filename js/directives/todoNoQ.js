/* Con permiso, Capitan. The hall is rented, the orchestra engaged. It's now time to see if you can dance - Q */

/*global todomvc */
'use strict';

todomvc.directive('noQ', function($http) {

  var pattern = new RegExp("[Qq]+");

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      
        function validate(value) {
          var newTodo = scope.newTodo;
          if (!newTodo.match(pattern)) {
            ngModel.$setValidity('qCheck', true);

            if(window.options) {
              var callback = window.options.clearError;
              callback();
            }

          } else {
            ngModel.$setValidity('qCheck', false);

            if(window.options) {
              var callback = window.options.onError;
              callback();
            }
          }
        }
        
        scope.$watch( function() {
          return ngModel.$viewValue;
        }, validate);
    }    
  }
});