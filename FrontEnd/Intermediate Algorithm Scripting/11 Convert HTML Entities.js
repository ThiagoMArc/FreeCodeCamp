var charMap = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };


function convertHTML(str) {
  // &colon;&rpar;
  var res = str.replace(/&|<|>|"|'/g, match=> charMap[match]);

  return res;
}

convertHTML("Dolce & Gabbana");
