
function pairwise(arr, arg) {
  
  let pidx = [];
  let i,j;
  let sum = 0;
  
  for(i=0; i < arr.length; i++){
    let trgt = arr.indexOf(arg-arr[i]);
    if(trgt !== -1 && trgt !== i){
      pidx.push(i,trgt);
      //removing the pair
      arr.splice(i,1,'visited');
      arr.splice(trgt,1,'visited');
    }
    
  }
  
  for(j=0; j < pidx.length; j++){
    sum += pidx[j];
  }
  
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
