
function telephoneCheck(str) {
    
  var reg = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/gm;
  if(str.match(reg)){
    return true;
  }
  return false;
}



telephoneCheck("2 (757) 622-7382");
