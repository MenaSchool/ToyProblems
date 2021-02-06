/**
 * write a function that returns the sum of the pair numbers inside an array
 *
 * exple sumPair([1,6,100,346,761,249])=>452
 *
 * sumPair([2,4,9,73])=>6
 */
function sumPair(array) {
  //your code goes here
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}
console.log(sumPair([1, 6, 100, 346, 761, 249]));
console.log(sumPair([2, 4, 9, 73]));




function sumOrChickPair(input) {
  if (Array.isArray(input) === true) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] % 2 === 0) {
        sum += input[i];
      }
    }
    return sum;
  } else if (Array.isArray(input) === false) {
    let chick = "";
    for (let i in input) {
      if (input[i] % 2 === 0) {
        chick = chick.concat(i + " & ");
      }
    }
    chick = chick.substring(0, chick.length - 2);
    return chick.concat("have pair values");
  }
}
obj = {
  a: 2,
  b: 5,
  c: 8,
};
console.log(sumOrChickPair(obj));
console.log(sumOrChickPair([1, 6, 100, 346, 761, 249]));
console.log(sumOrChickPair([2, 4, 9, 73]));

/**
 * bonus points
 *
 * same function works for both arrays and objects
 *
 * if the input is an array return the sum of the pair numbers
 *
 * if it is an object like this:
 *
 * obj={
 *     a:2,
 *     b:5,
 *     c:8
 * }
 *
 * return => "a & c have pair values"
 *
 */
