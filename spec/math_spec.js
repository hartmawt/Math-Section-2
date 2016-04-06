// tell the spec where to find our code
var math = require('../math');

describe("A simple arithmetic program", function() {

	it("can add two numbers", function () {
		expect(math.add(3,5)).toBe(8);
		expect(math.add(3.2,5.5)).toBe(8.7);
		expect(math.add(2.9,19.1)).toBe(22);
	});

	it("can subtract two numbers", function () {
		expect(math.sub(3,5)).toBe(-2);
		expect(math.sub(3.5,5)).toBe(-1.5);
	});

	it("can multiply two numbers", function () {
		expect(math.multiply(3,5)).toBe(15);
		expect(math.multiply(3.5,5)).toBe(17.5);
	});	

	it("can divide two numbers", function () {
		expect(math.divide(6,2)).toBe(3);
		expect(math.divide(3,0)).toBe("Error! Division by Zero.");	
	});	
});
