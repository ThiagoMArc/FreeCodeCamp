function palindrome(str) {
  // Good luck!
  var prcd_str = str.replace(/[^A-Z0-9]/ig,'').toLowerCase();

  var palin_str = prcd_str.split('').reverse().join('');

  if(palin_str === prcd_str){
    return true;
  }
  return false;

}



palindrome("eye");
