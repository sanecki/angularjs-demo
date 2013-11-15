/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
 */
todomvc.factory('$listProcessorSvc', function () {

	return {
		process: function (list) {
			
		},

		hasXs: function (list) {
			var found = false;
			angular.forEach(list, function(value, key) {
				if(value.title.match(/x/i)) {
					found = true;
				}
			});
			return found;
		},

		purgeXs: function (list) {
			if(!hasXs(list)) { 
				return;
			}

			angular.forEach(list, function(value, key) {
				console.log(value)
				value.title = value.title.replace(/y/g, 'z');
			});
		},

		purge2and5s: function (list) {

		}
	};
});
