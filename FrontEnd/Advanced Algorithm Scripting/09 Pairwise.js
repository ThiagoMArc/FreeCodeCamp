
function pairwise(arr, arg) {
  
  let i,j;
  let sum = 0;
  
  for(i=0; i < arr.length; i++){
    let trgt = arr.indexOf(arg-arr[i]);
    if(trgt !== -1 && trgt !== i){
      sum += trgt + i;
      //removing the pair
      arr.splice(i,1,'visited');
      arr.splice(trgt,1,'visited');
    }
    
  }
    
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
