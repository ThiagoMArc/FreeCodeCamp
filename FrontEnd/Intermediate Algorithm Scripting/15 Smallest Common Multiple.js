function gcd(num1,num2){
  while(num1 !== num2){
    if(num1>num2){
      num1 -= num2;
    }
    else{
      num2-=num1;
    }
  }
  return num1;
}


function lcm(num1,num2){
  return (num1*num2)/gcd(num1,num2);
}


function smallestCommons(arr) {

  var min = Math.min.apply(null,arr);
  var max = Math.max.apply(null,arr);
  var range_arr = [];

  for(var i=min; i<=max; i++){
    range_arr.push(i);
  }

  var res = range_arr.reduce((val1,val2) => lcm(val1,val2));
  
  return res;
}


smallestCommons([1,5]);
