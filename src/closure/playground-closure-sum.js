export function sumWithClosure(firstNum) {
	return function (secondNum = 0) {
		return firstNum + secondNum;
	};
}

sumWithClosure(2)(3);
sumWithClosure(90)();
sumWithClosure()();
