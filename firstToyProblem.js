/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

 const arr = [1,10,5,-3,100];

function minimum(array) {
  let num = array[0];
  for(let a = 0;a<array.length;a++){
    if(array[a] < num )
      num = array[a];
  }
  return num;
}


console.log(minimum(arr));