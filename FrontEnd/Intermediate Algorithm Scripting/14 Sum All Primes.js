function checkPrime(num){
  for(var i=2; i< num; i++){
    if(num%i===0){
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {

  var primes = [];

  for(var i=2; i<=num; i++){
    if(checkPrime(i)){
      primes.push(i);
    }
  }

  var res= primes.reduce((a,b) => a+b);

  return res;
}

sumPrimes(10);
