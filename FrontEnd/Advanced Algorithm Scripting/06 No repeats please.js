function swap(arr,idx1,idx2){
  var tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}

//Heap's Algorithm
function genPermutations(n, array, res){
  if(n === 1){
    res.push(array.join(''));
  }
  else{
    for(var i=0; i<n-1; i++){
      genPermutations(n-1,array,res);
      if(n%2===0){
        swap(array,i,n-1);
      }
      else{
        swap(array,0,n-1);
      }
    }
    genPermutations(n-1,array,res);
  }
  return res;

}


function permAlone(str) {

  var str_arr = str.split('');

  if(str_arr.length === 1){
    return 1;
  }

  var r = [];
  var permuts = genPermutations(str_arr.length, str_arr, r);
  var regex = /(.)\1+/;
  var ans = permuts.filter(elem => !elem.match(regex)).length;

  return ans;
}

permAlone('aabb');
