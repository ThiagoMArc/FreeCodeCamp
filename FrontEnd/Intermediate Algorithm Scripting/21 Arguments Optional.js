function isNumeric(arg){
  return typeof arg === "number";
}


function addTogether() {
  var args = Array.from(arguments);

  if(args.length === 2){
    if(isNumeric(args[0]) && isNumeric(args[1])){
      return args[0] + args[1];
    }
  }

  else if(args.length ===1){

    if(isNumeric(args[0])){

      return function(x){
        if(isNumeric(x)){
          return args[0] + x;
        }

      };

    }
  }

}

addTogether(2,"3");
