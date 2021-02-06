/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

function minimum(array) {
  var minimum=array[0] ;
 for ( var i=0 ; i< array.length ; i++) {
    if (array[i] < minimum) {
      minimum = array[i] ;
    }
    return minimum ;
 }
}

minimum([1,7, ,2,4,6,7,4,1,4,6,7,8])



