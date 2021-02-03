function minimum(array) {
for (let i=0; i<1; i++) {
    array.sort();
}
return array[0];
}

let array = [1,10,5,4,-123,11,-3,100];
let result = minimum(array);
console.log(result);