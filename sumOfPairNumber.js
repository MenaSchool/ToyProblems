/**
 * write a function that returns the sum of the pair numbers inside an array
 *
 * exple sumPair([1,6,100,346,761,249])=>452
 *
 * sumPair([2,4,9,73])=>6
 */
console.log(sumPair([1,6,100,346,761,249]));

console.log(pair({ a: 2, b: 5, c: 8 }));



function sumPair(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i] % 2 == 0) {
      sum += array[i];
    }

  }
  return sum;


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
 *   
 * 
 * return => "a & c have pair values"
 *
 */
function pair(array) {
  var Keys = "";
  for (var key in array) {
   
    if (array[key] % 2 == 0) {
      Keys+= array[key]+","
    }

  }
  return "The " +Keys +"have pair values"
    
    
}