/**
 * write a function that returns the sum of the pair numbers inside an array
 *
 * exple sumPair([1,6,100,346,761,249])=>452
 *
 * sumPair([2,4,9,73])=>6
 */
function sumPair(array) {
  let objVal = Object.values(array); 
  let sum =0;
  for(let i=0;i<objVal["length"];i++){
    if(objVal[i]%2==0)
      sum += objVal[i];
  }
  return sum;
}
console.log(sumPair([1,2,4,5,8,9,10,23,88]));
console.log(sumPair({a:5,b:10,c:12}));
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
