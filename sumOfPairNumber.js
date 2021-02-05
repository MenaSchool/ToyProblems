/**
 * write a function that returns the sum of the pair numbers inside an array
 *
 * exple sumPair([1,6,100,346,761,249])=>452
 *
 * sumPair([2,4,9,73])=>6
 */
function sumPair(array) {
  //your code goes here
  if (Array.isArray(list))
  {
  var sum=0;
  for (let i=0; i<array.length ; i++)
  {
if(array[i] % 2 === 0)
{
  sum =sum+array[i];
}
  }
  return sum;
} else {
  for (var j of array){
  if (j %2 ===0){
   console.log(j) ;
  }}
}
}
let obj= {
  a:2,
  c:5,
  d:7,
  f:6
 };

let list=[2,4,9,73];
console.log (sumPair(list));
console.log (sumPair(obj));
//console.log(Array.isArray(list));
//console.log(typeof obj);
//console.log(typeof list);

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
