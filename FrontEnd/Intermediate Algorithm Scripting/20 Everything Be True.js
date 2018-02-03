
function truthCheck(collection, pre) {
  // Is everyone being true?
  var res = collection.every(function(object){
    return object[pre];
  });

  return res;


}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
