/**
 * write a function that returns the sum of the pair numbers inside an array
 *
 * exple sumPair([1,6,100,346,761,249])=>452
 *
 * sumPair([2,4,9,73])=>6
 */
function sumPair(array) {
  if (Array.isArray(array)) {
    let sumOfPairNumbers = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
        sumOfPairNumbers += array[i];
      }
    }
    return sumOfPairNumbers;
  } else {
    keys = [];
    for(let x in array) {
      if(array[x] % 2 == 0) {
        keys.push(x);
      }
    }
    console.log(keys, " have pair values");
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
