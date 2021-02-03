/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

const myArr = [1, 10, 5, -3, 100];

//function to return minValue of array
function minimum(array) {
  let minValue = array[0];
  for (let count = 1; count < array.length; count++) {
    if (array[count] < minValue) {
      minValue = array[count];
    }
  }
  return minValue;
}
//function to return maxValue of array

/*
function maximum(array) {
  let maxValue = array[0];
  for (let count = 1; count < array.length; count++) {
    if (array[count] > maxValue) {
      maxValue = array[count];
    }
  }
  return maxValue;
}
console.log(maximum(myArr));
*/

console.log(minimum(myArr));