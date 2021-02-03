/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

function minimum(array) {
  return;
}

var arr= [1,10,5,-3,100];
var max=[0];
var min=[0];
for(var i =0 ; i<arr.length; i++){

  if (arr[i]>=max){

    max=arr[i];
  }

}

for(var i =0 ; i<arr.length; i++){

  if (arr[i]<=min){

    min=arr[i];
  }

}

console.log("hello mena ");
console.log('this is a minimum value: ' ,  min);
console.log('this is a max value: ', max);