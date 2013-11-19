/*global todomvc, angular */
/**
 * Services that persists and retrieves TODOs from localStorage
 */
todomvc.factory('$listProcessorSvc', function () {
	'use strict';

	return {
		process: function (list) {
			this.purgeXs(list);
			this.purge2and5s(list);
		},

		hasZs: function (list) {
			var found = false;
			angular.forEach(list, function(value/*, key*/) {
				if(value.title.match(/[zZ]/i)) {
					found = true;
				}
			});
			return found;
		},

		hasXs: function (list) {
			var found = false;
			angular.forEach(list, function(value/*, key*/) {
				if(value.title.match(/[xX]/i)) {
					found = true;
				}
			});
			return found;
		},

		purgeXs: function (list) {
			if(!this.hasXs(list)) { 
				return;
			}

			angular.forEach(list, function(value/*, key*/) {
				value.title = value.title.replace(/y/g, 'z');
				value.title = value.title.replace(/Y/g, 'Z');
			});
		},

		purge2and5s: function (list) {
			if(!this.hasZs(list)) { 
				return;
			}

			angular.forEach(list, function(value/*, key*/) {
				value.title = value.title.replace(/2/g, 'a');
				value.title = value.title.replace(/5/g, 'a');
			});
		}
	};
});
