/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

var list = [1, 10, -3, 100];

minimum(list);
function minimum(array) {

  var min = list[0];
  for (var i = 0; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  return min;
}
