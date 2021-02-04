
let Arr1 = [1, 24, 3, 4, 5, 6,"C", 73, 8, 19];
let Arr2 = {a:1, b:24, c:3, d:4, e:5, f:6, g:73, h:8, i:19};

function sumEven(array) {
  let sum = 0
    if(Array.isArray(array)){  
         for(i of array){
           if(i % 2 === 0){	                
             sum = sum + i
             }
            }
             return sum;
            }
    else if (typeof array ==="object") {
        for (let key in array){
          if (array[key] % 2 === 0){             
            (sum = sum + array[key])
          }
        }
      return sum; 
  }
}
  console.log(sumEven(Arr1));
  console.log(sumEven(Arr2));
  /*
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