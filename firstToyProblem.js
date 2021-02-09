/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */
var number= [1, 10, -3, 100];
console.log(minimum(number));
function minimum(array) {
  var minnum = number[0];
  for (var i = 0; i < number.length; i++) {
    if (number[i] < minnum) {
      minnum = number[i];
    }
  }
  return minnum
}