function mutation(arr) {
  var arr1 = arr[0].toLowerCase().split('');
  var arr2 = arr[1].toLowerCase().split('');
  var cont=0;

  for(var i=0; i<arr2.length; i++){
    if(arr1.includes(arr2[i])){
      cont+=1;
    }
  }

  return cont===arr2.length;
}

mutation(["hello", "hey"]);
