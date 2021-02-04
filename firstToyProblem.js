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
