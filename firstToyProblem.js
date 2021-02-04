/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

function minimum(array) {
  var min= array[0];
  for (let i=1; i<array.length ; i++){
    if( array [i] <min){
      min =array[i];
    }
  }
  return min;
}

let list =[1,10,5,-3,100];
console.log(minimum(list));
