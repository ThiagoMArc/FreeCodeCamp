
function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments).slice(1);
  var filtered = [];

  arr.filter(function(val){
    if(!args.includes(val)){
      filtered.push(val);
    }
  });

  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
