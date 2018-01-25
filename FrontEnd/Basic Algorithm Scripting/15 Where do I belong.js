function compare(p1,p2){
  return p1-p2;
}


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(compare);
  return arr.indexOf(num);
}

getIndexToIns([2, 20, 10], 19);
