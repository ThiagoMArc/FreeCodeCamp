function chunkArrayInGroups(arr, size) {
  // Break it up.
  var res_arr = [];

  for(var i=0; i< arr.length;){
    res_arr.push(arr.slice(i, i+=size));
  }

  return res_arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
