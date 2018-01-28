function whatIsInAName(collection, source) {
  var k = Object.keys(source);
  var arr=[];
  arr = collection.filter(function(o){
    return k.every(function(ks){
      return o[ks]===source[ks];
    });
  });

  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
