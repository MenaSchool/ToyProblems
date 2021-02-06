/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

function minimum(array) {
  var smallest = array[0]
  for(i of array){
      if( i < smallest){
          smallest = i
      }
  }
  return smallest;
}

minimum([1,10,5,-3,100]);