function diff(arr1,arr2){
  var diff_arr1_arr2 = arr1.filter(elem => !arr2.includes(elem));
  var diff_arr2_arr1 = arr2.filter(elem => !arr1.includes(elem));
  return diff_arr1_arr2.concat(diff_arr2_arr1);
}


function sym(args) {
  args = Array.prototype.slice.call(arguments);

  var res = args.reduce(diff,[]);

  return Array.from(new Set(res));
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
