/**
 * write a function that returns the sum of the pair numbers inside an array
 *
 * exple sumPair([1,6,100,346,761,249])=>452
 *
 * sumPair([2,4,9,73])=>6
 */
console.log(sumPair( obj={
      a:2,
     b:5,
     c:8
  
   }))
function sumPair(array) {
  //your code goes here
  if (Array.isArray(array)) {
    var sum = 0;
    for (var x = 0; x < array.length; x++) {
      if (array[x] % 2 == 0) {
        sum += array[x];
      }

    }
    return sum;
  } else if (typeof array == 'object') {
    let pair = [];
    for (var key in array) {
      if (array[key] % 2 === 0) {
        pair.push(key);
      }
    }
    return pair.join(' & ') + ' have pair values';
  }



}

/**
 * bonus points
 *
 * same function works for both arrays and objects
 *
 * if the input is an array return the sum of the pair numbers
 *
 * if it is an object like this:
 *
 * obj={
 *     a:2,
 *     b:5,
 *     c:8
 * }
 *
 * return => "a & c have pair values"
 *
 */
