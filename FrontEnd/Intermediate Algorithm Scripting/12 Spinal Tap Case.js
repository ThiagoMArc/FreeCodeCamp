function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var regex = /\s|_/g;
  
  return str.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase().replace(regex,'-');
}

spinalCase('ThisIsSpinalTap');
