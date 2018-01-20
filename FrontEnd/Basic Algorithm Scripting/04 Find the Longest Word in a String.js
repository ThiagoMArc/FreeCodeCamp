function findLongestWord(str) {
  var str_arr = str.split(' ');
  var longest = str_arr[0].length;

  for(var i=1; i< str_arr.length; i++){
    if(longest < str_arr[i].length){
      longest = str_arr[i].length;
    }
  }

  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
