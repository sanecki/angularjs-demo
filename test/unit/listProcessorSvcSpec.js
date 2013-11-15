(function() {

	describe('List Processor Service Tests', function () {
		var testableSvc;

		beforeEach(function() {
			
			module('todomvc');

			inject(function($listProcessorSvc) {
				testableSvc = $listProcessorSvc;
			});				
		});

		it('should find nothing with an empty list', function () {
			
			var alist = [];

			expect(testableSvc.hasXs(alist)).toBe(false);
		});

		it('should detect x\'s in a list', function () {
			
			var alist = [{ title: 'some string x'},
			{ title: 'some string'}];

			expect(testableSvc.hasXs(alist)).toBe(true);
		});

		it('should detect any x\'s', function () {
			
			var alist = [{ title: 'some string'},
			{ title: 'some other string'}];

			expect(testableSvc.hasXs(alist)).toBe(false);
		});
	});
	
}());