function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.filter(function(value){
    if(!arr2.includes(value)){
      newArr.push(value);
    }
  });

  arr2.filter(function(value){
    if(!arr1.includes(value)){
      newArr.push(value);
    }
  });
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
