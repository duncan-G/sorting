function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */

    sliceVal = parseInt(wholeArray.length/2);
    firstHalf = wholeArray.slice(0, sliceVal); //O(n)
    secondHalf = wholeArray.slice(sliceVal); //O(n)
    
    return [firstHalf, secondHalf];
  };

function merge(arr1, arr2, callback) {
  let arrLength;
  let mergedArr = [];
 
  while (arr1.length !== 0 && arr2.length !== 0) {
    if ( callback(arr1[0], arr2[0]) ) {
      mergedArr.push(arr1.shift()); //O(n)
    } else {
      mergedArr.push(arr2.shift()); //O(n)
    }
    
  }
  return mergedArr.concat(arr1).concat(arr2)
}

function mergeSort(array, callback) {
  if (array.length === 1) {
    return array;
  } else {
    var splitArray = split(array);
    var arr1 = mergeSort(splitArray[0], callback);
    var arr2 = mergeSort(splitArray[1], callback);
    
  }
  
  return merge(arr1, arr2, callback)
  
  
}


// var arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
//     var sorted = mergeSort(arrToSort, function(a, b) {
//     if (a.age < b.age) return true; // returning `-1` means "a goes before b"
//     if (a.age > b.age) return false;  // returning  `1` means "b goes before a"
//     return false; // returning 0 means "a and b are equivalent"
//     })
    
// console.log(sorted)
