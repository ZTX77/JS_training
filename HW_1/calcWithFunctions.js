function calculate(num, func) {
  if (!func) {
		return num;
	} else {
		return func(num);
	}
}

function zero(func) {return calculate(0,func);}
function one(func) {
	return calculate(1,func);
}
function two(func) {
	return calculate(2,func);
}
function three(func) {
	return calculate(3,func);
}
function four(func) {
	return calculate(4,func);
}
function five(func) {
	return calculate(5,func);
}
function six(func) {
	return calculate(6,func);
}
function seven(func) {
	return calculate(7,func);
}
function eight(func) {
	return calculate(8,func);
}
function nine(func) {
	return calculate(9,func);
}

function plus(right) {
  return function(left) { return left + right; };
}
function minus(right) {
  return function(left) {
		return left - right;
	};
}
function times(right) {
  return function(left) { return left * right; };
}
function dividedBy(right) {
  return function(left) { return pasrseInt(left / right); };
}

console.log(eight(minus(three())));
console.log(four(plus(nine())));
console.log(four(times(four())));
console.log(eight(dividedBy(four())));
