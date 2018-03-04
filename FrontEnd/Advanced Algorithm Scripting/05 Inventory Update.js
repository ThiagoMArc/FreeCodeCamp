function findElemIndexByName(array, n){
    let i;
    for(i=0; i< array.length; i++){
      if(array[i][1] === n){
        return i;
      }
    }
    return -1;
  }
  
  
  function updateInventory(arr1, arr2) {
      let k;
      for(k=0; k< arr2.length; k++){
        var idx = findElemIndexByName(arr1,arr2[k][1]);
        if(idx > -1){
          arr1[idx][0] += arr2[k][0];
        }
        else{
          arr1.push(arr2[k]);
        }
      }
      
   
      return arr1.sort((a,b) => a[1] > b[1] ? 1:-1); 
  }
    
  updateInventory(curInv, newInv);
  