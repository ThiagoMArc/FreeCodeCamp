function translatePigLatin(str) {
  var vog = ['a','e','i','o','u'];
  if(vog.includes(str[0])){
    return str + "way";
  }
  else if(!vog.includes(str[0]) && !vog.includes(str[1])){
    return str.substring(2) + str.slice(0,2) + "ay";
  }
  else{
    return str.substring(1) + str.slice(0,1) + "ay";
  }
}

translatePigLatin("consonant");
