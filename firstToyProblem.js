/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */


function minimum(array) {
  return Math.min(...array);
}
console.log(minimum([1,10,5,-3,100]));
