/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

function arrayMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
    return min;
  }
}
let array1 = [1, 4, 6, 87, -50, 40];

arrayMin([1, 2, 3, 4, 5, 6]);


