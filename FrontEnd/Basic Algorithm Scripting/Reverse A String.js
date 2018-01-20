function reverseString(str) {
  var string_arr = str.split('');
  string_arr.reverse();
  return string_arr.join('');
}

reverseString("hello");
