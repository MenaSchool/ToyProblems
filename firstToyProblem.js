/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

function minimum(array) {
  let min = array[0];
  for(var i in array){
      if(array[i] < min){
        min = array[i]
      }
  }
  return min;
}

console.log(minimum([1,10,5,-3,100]));