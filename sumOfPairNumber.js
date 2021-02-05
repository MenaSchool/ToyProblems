/**
 * write a function that returns the sum of the pair numbers inside an array
 *
 * exple sumPair([1,6,100,346,761,249])=>452
 *
 * sumPair([2,4,9,73])=>6
 */
function sumPair(elements) {
  if (Array.isArray(elements) === true) {
    let sum = 0;
    for (let count = 0; count < elements.length; count++) {
      if (elements[count] % 2 === 0)
        sum += elements[count];
    }
    return sum;
  } else {
    let str =" "
    for (const accessItem in elements) {
      if (elements[accessItem] % 2 === 0) {
        str+=accessItem+" & ";
      }
    }
    return str+"have pair values";
  }
}

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
 *     c:8,
 *     v:4,
 *     r:33
 * }
 *
 * return => "a & c & v have pair values"
 *
 */
const myArr = [1, 6, 100, 346, 761, 249];
let obj = {
  a: 2,
  b: 5,
  c: 8,
  v: 4,
  r:33,
  x:100
}

console.log(sumPair([1, 6, 100, 346, 761, 249]));
console.log(sumPair(obj));