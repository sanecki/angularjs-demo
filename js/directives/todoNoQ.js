/* Con permiso, Capitan. The hall is rented, the orchestra engaged. It's now time to see if you can dance - Q */

/*global todomvc */
todomvc.directive('noQ', function(/*$http*/) {
	'use strict';

	var pattern = new RegExp("[Qq]+");

	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			
			function validate(/*value*/) {
				var newTodo = scope.newTodo;
				var callback = function(){};
				if (!newTodo.match(pattern)) {
					ngModel.$setValidity('qCheck', true);

					if(window.options) {
						callback = window.options.clearError;
					}

				} else {
					ngModel.$setValidity('qCheck', false);

					if(window.options) {
						callback = window.options.onError;
					}
				}
				callback();
			}
			
			scope.$watch( function() {
				return ngModel.$viewValue;
			}, validate);
		}		
	};
});
