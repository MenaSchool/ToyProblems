/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */
function minimum(array) {
  let min = array[0];
  for(let i = 1; i < array.length; i++){
    if(array[i] < min){
      min = array[i]
    }
  }
  return min;
}

// Another solutions
/* 
function minimum(array) {
  let min = Number.MAX_VALUE;
  for(let num of array){
    if(num < min){
      min = num
    }
  }
  return min;
}

function minimum(array) {
  return Math.min(...array);
}
*/

console.log(minimum([1,10,5,-3,100]));