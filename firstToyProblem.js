function minimum(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min){
          min = array[i];
        }
      }
      return min;
}


let array = [1,10,5,-3,100];
let min = minimum(array);

console.log(min);