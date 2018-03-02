
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var i;
    for(i=0; i< arr.length; i++){
      
      var T = Math.round(2 * Math.PI * (Math.sqrt(Math.pow(earthRadius + arr[i]["avgAlt"],3)/GM)));
      
      delete arr[i]["avgAlt"];
      
      arr[i]["orbitalPeriod"] = T;
      
    }  
    
    return arr;
  }
  
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
  