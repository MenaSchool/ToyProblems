const numbers = [2,4,9,73]


function sumPair(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0)
        sum+=array[i];
    }
  return sum;
}
console.log(sumPair(numbers));