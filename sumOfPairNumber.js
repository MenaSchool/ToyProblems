/**
 * write a function that returns the sum of the pair numbers inside an array
 *
 * exple sumPair([1,6,100,346,761,249])=>452
 *
 * sumPair([2,4,9,73])=>6
 */
function sumPair(array) {
  //your code goes here
   if(Array.isArray(array)){
       let sum=0;
       array.map( e => {
      if(e %2 ==0){
        sum+= e;
       }
  
      })
      console.log(sum);
   }else{
        let pairArr=[];
        let res="";
        for(const prop in array){
          if(array[prop] %2 ==0){
             pairArr.push(prop);
          }
        }
         
        if(pairArr.length === 1){
          res=`${pairArr[0]} has pair values`
        }else{
        pairArr.map( (e,i) =>{
          if(i != pairArr.length-1){
            res += `${e} & `;
          }else{
            res+=`${e} have pair values`;
          }
        })
        }
        console.log(res);

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
 *     c:8
 * }
 *
 * return => "a & c have pair values"
 *
 */
