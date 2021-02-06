/**
 * write a function that returns the sum of the pair numbers inside an array
 *
 * exple sumPair([1,6,100,346,761,249])=>452
 *
 * sumPair([2,4,9,73])=>6
 */

function sumPair(array) {
  var sum = 0;
  for (var j = 0; j < array.length; j++){
    if (array[j] % 2 == 0) {
      sum += array[j];
    }

  }
  return sum;

}

console.log(sumPair([1,6,100,346,761,249]));
console.log(sumPair([2,4,9,73]));


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
