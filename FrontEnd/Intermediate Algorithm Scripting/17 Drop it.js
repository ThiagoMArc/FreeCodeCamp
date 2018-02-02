function dropElements(arr, func) {
  // Drop them elements.
  arr.map(function(){
    while(!func(arr[0])){
      arr.shift();
    }
  });

  return arr;

}

dropElements([1, 2, 3], function(n) {return n < 3; });
