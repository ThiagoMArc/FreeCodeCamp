function fibos(num){
  var fibs = [];
  var prev = 0, curr=1, temp;

  while(num>0){
    temp = curr;
    curr += prev;
    prev = temp;
    num-=1;
    fibs.push(temp);
  }

  return fibs;
}

function sumFibs(num) {
  var arr = fibos(num);
  var res = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i]%2===1 && arr[i]<=num){
      res += arr[i];
    }
  }


  return res;
}

sumFibs(4);
