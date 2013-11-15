(function() {

	describe('List Processor Service Tests ->', function () {
		var testableSvc;

		beforeEach(function() {
			
			module('todomvc');

			inject(function($listProcessorSvc) {
				testableSvc = $listProcessorSvc;
			});				
		});

		it('1 should find nothing with an empty list', function () {
			
			var alist = [];

			expect(testableSvc.hasXs(alist)).toBe(false);
		});

		it('2 should detect x\'s in a list', function () {
			
			var alist = [{ title: 'some string x'},
			{ title: 'some string'}];

			expect(testableSvc.hasXs(alist)).toBe(true);
		});

		it('3 should not detect any x\'s', function () {
			
			var alist = [{ title: 'some string'},
			{ title: 'some other string'}];

			expect(testableSvc.hasXs(alist)).toBe(false);
		});

		it('4 Should turn yY\'s to zZ\'s with a string with an x', function() {
			var alist = [{ title: 'x yyy'}, 
			{ title: 'x YYY'}];

			testableSvc.purgeXs(alist);

			expect(alist[0].title).toBe('x zzz');
			expect(alist[1].title).toBe('x ZZZ');
		});

		it('5 Should not turn y\'s to z\'s with no x present', function() {
			var alist = [{ title: 'yyy'}];

			testableSvc.purgeXs(alist);

			expect(alist[0].title).toBe('yyy');
		});

		it('6 Should turn y\'s to z\'s with x present in another item', function() {
			var alist = [{ title: 'x'},
			{ title: 'yYy'}];

			testableSvc.purgeXs(alist);

			expect(alist[1].title).toBe('zZz');
		});

		it('7 Should detect zZ\'s', function() {
			var alist = [{ title: 'zZz'}];

			expect(testableSvc.hasZs(alist)).toBe(true);
		});

		it('8 Should not detect zZ\'s', function() {
			var alist = [{ title: 'xyxy'}];

			expect(testableSvc.hasZs(alist)).toBe(false);
		});

		it('9 Should turn 2\'s and 5\'s to a\'s', function() {
			var alist = [{ title: 'z 222'}, 
			{ title: 'z 555'}];

			testableSvc.purge2and5s(alist);

			expect(alist[0].title).toBe('z aaa');
			expect(alist[1].title).toBe('z aaa');
		});

		it('10 Should not turn y\'s to z\'s with no x present', function() {
			var alist = [{ title: '25252'}];

			testableSvc.purge2and5s(alist);

			expect(alist[0].title).toBe('25252');
		});
	});
	
}());