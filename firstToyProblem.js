/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */
 // use for loop 
function minimum(array) {
    let mini = array[0];
    for(let i = 1 ; i < array.length ;i++)
    {
         if(mini > array[i])
         {
           mini = array[i]; 
         }
    }
  return  mini;
}


let array = [1,10,5,-3,100];
let nummin = minimum(array);

console.log(nummin);
