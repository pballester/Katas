var FizzBuzzNumber;

FizzBuzzNumber = (function() {
	
	function FizzBuzzNumber (number) {
		if (typeof number !== "number") {
			throw new Error("An argument is needed");
		}
		this.value = number;
		this.printFizzBuzz();
	}

	FizzBuzzNumber.prototype.printFizzBuzz = function() {
		if (this.value % 3 === 0 && this.value % 5 === 0) {
			console.log("FizzBuzz");
			return;
		}
		if (this.value % 3 === 0) {
			console.log("Fizz");
			return;
		}
		if (this.value % 5 === 0) {
			console.log("Buzz");
			return;
		}
		console.log(this.value);
	};

	return FizzBuzzNumber;

})();

for (var i=1; i <= 100; i++) {
	new FizzBuzzNumber(i);
}

