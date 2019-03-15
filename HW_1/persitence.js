function persistence(num) {

  var arr = num.toString().split("");
  var counter = 0;
  var product;
  while (arr.length > 1) {
    product = arr.reduce(function(a, b) {
      return a * b;
    });
    console.log(product);
    counter++;
    arr = product.toString().split("");
  }
  return counter;
}


persistence(39);
