function steamrollArray(arr) {
  // I'm a steamroller, baby
  var res = [];

  arr.forEach(function(val){
    if(!Array.isArray(val)){
      res.push(val);
    }
    else{
      res = res.concat(steamrollArray(val));
    }
  });

  return res;
}

steamrollArray([1, [2], [3, [[4]]]]);
