function truncateString(str, num) {
  // Clear out that junk in your trunk
  var str_trunc = "";
  if(str.length > num){
    if(num>3){
      str_trunc = str.slice(0,num-3).concat("...");
    }
    else if(num <= 3){
      str_trunc = str.slice(0,num).concat("...");
    }
  }
  else{
    str_trunc = str;
  }
  return str_trunc;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
