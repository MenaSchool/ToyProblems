/**
 * [1,10,5,-3,100]
 * create a function that finds the minimum
 * without using any pre build in function
 */

function minimum(array) {
    let min = Infinity;
    for (let i = 0; i < array.length; i++)
        if (array[i] < min)
            min = array[i];
    return min;
}