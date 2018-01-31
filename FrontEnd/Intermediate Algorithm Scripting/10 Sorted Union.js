
function uniteUnique(arr) {
  var arrs = [];

  for(var i=0; i<arguments.length;i++){
    arrs.push(arguments[i]);
  }


  var n_arr = arrs.reduce(function(arr,arr2){
    return arr.concat(arr2);
  });


  return Array.from(new Set(n_arr));
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
