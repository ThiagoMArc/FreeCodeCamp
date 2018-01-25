function rot13(str) { // LBH QVQ VG!
  var res=[];

  for(var i=0; i<str.length;i++){
    //if char is an uppercase letter
    if(str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90){
      var letter_code = ((str[i].charCodeAt() - 65 + 13)% 26 + 65).toString();
      res.push(letter_code);
    }
    else{
      res.push(str[i].charCodeAt());
    }

  }
  return String.fromCharCode.apply(String, res);
}

// Change the inputs below to test
rot13("SERR CVMMN!");
