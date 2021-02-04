/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

const numbers = [1,10,5,-3,100];

function minimum(array) {
    
    let lowest = 0;
    
    for(let i = 0; i < array.length; i++){
        if (array[i] < lowest){
            lowest = array[i];
        }
    }
  return lowest;
}

console.log(minimum(numbers));
