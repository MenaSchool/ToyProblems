/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

function minimum(array) {
  let arr = array.sort((a,b)=> a-b );
  return arr[0];
}
