/**
 * write a function that returns the sum of the pair numbers inside an array
 *
 * exple sumPair([1,6,100,346,761,249])=>452
 *
 * sumPair([2,4,9,73])=>6
 */
function sumPair(array) {
    let sum = 0;
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++)
            if (array[i] % 2 == 0)
                sum += array[i];
        return sum;
    } else {
        let pairValues = new Array();
        let objectArray = Object.entries(array);
        for (let i = 0; i < objectArray.length; i++)
            if (objectArray[i][1] % 2 == 0)
                pairValues.push(objectArray[i][0])
        if (pairValues.length == 0)
            return "The object doesn't have any pair values";
        else {
            let pairValuesString = "";
            for (let i = 0; i < pairValues.length - 1; i++)
                pairValuesString += pairValues[i] + " & ";
            pairValuesString += pairValues[pairValues.length - 1] + " have pair value";
            if (pairValues.length > 1)
                pairValuesString += "s";
            return pairValuesString;
        }
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