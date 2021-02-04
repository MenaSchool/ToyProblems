/*
 * write a function that returns the sum of the pair numbers inside an array
 *
 * exple sumPair([1,6,100,346,761,249])=>452
 *
 * sumPair([2,4,9,73])=>6
 */
function sumPair(array) {

    let total = 0

        if(Array.isArray(array)){  // for array
            for(i of array){
                if(i % 2 == 0){
                    total = total + i
                }
            }
            return total
        }else if(typeof array == "object"){ // can replace it by if(true) it works too     for object
            for(let key in array){
                if(array[key] % 2 == 0){
                    total = total + array[key]
                        };
                    }
            return total
                }  
}

    
    console.log(sumPair([1,6,100,346,761,249]));
    console.log(sumPair({
           a:2,
           b:5,
           c:8,
           d:10
    }));
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