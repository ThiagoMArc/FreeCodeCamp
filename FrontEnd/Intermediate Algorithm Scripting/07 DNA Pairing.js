function chunkArray(arr,size){
  var r_arr = [];
  for(var i=0; i<arr.length;){
    r_arr.push(arr.slice(i, i+=size));
  }
  return r_arr;
}


function pairElement(str) {
  var pair ='';

  for(var i=0; i< str.length; i++){
    if(str[i]==='A'){
      pair += str[i]+'T';
    }
    else if(str[i]==='T'){
      pair += str[i] + 'A';
    }
    else if(str[i]==='C'){
      pair += str[i] + 'G';
    }
    else if(str[i]==='G'){
      pair += str[i] + 'C';
    }
  }

  return chunkArray(pair.split(''),2);

}

pairElement("ATCGA");
