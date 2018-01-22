function largestOfFour(arr) {
  // You can do this!
  var res = [];
  for(var i=0; i< arr.length; i++){
    var m = Math.max.apply(null,arr[i]);
    res.push(m);
  }
  return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
