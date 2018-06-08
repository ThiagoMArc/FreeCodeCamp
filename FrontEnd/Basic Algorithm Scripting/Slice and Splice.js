function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let cpArr1 = arr1.slice(0,);
    let cpArr2 = arr2.slice(0,);
    cpArr2.splice(n, 0, ...cpArr1);
    return cpArr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);