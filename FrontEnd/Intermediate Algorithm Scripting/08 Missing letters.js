function fearNotLetter(str) {
  var alphabet = "abcdefgheijklmnopqrstuvwxyz";
  var compare = [];
  var str_arr = str.split('');
  var start = alphabet.charCodeAt(alphabet.indexOf(str[0]));
  var end = alphabet.charCodeAt(str.length);

  //mount subarray from alphabet
  for(var i=start; i<=end; i++){
    compare.push(String.fromCharCode(i));
  }

  //diff between arrays
  var res = compare.filter(elem => !str_arr.includes(elem));

  if(res.length===0){
    return undefined;
  }
  else{
    return res.join();
  }

}

fearNotLetter("bcd");
