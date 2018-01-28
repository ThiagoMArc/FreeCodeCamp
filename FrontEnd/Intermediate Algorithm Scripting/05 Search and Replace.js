function myReplace(str, before, after) {
  var string = '';
  //if "before" starts with uppercase letter
  if(before.charAt(0) !== before.charAt(0).toLowerCase()){
    string = str.replace(new RegExp(before,'g'),after.charAt(0).toUpperCase()+
                                    after.substring(1).toLowerCase());
  }
  else{
    string = str.replace(new RegExp(before,'g'), after);
  }
  return string;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
