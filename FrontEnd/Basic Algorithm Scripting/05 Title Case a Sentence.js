function titleCase(str) {
  var str_arr = str.split(' ');
  var title_arr = [];
  var title_str = '';
  for(var i=0; i< str_arr.length; i++){
    var title = str_arr[i].charAt(0).toUpperCase().
    concat(str_arr[i].substring(1).toLowerCase());
    title_arr.push(title);
    title_str = title_arr.join(' ');
  }

  return title_str;
}

titleCase("I'm a little tea pot");
