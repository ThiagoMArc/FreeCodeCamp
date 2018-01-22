function sum(p1,p2){
  return p1+p2;
}

function sumAll(arr) {
  var r_arr = [];
  var min = Math.min.apply(null,arr);
  var max = Math.max.apply(null,arr);

  for(var i=min;i<=max;i++){
    r_arr.push(i);
  }

  var r_sum = r_arr.reduce(sum,0);
  return r_sum;
}

sumAll([5, 10]);
