/* 

Map, filter, reduce are array methods.
they are used to iterate over an array and perform transformation or computation.
each may or maynot return a new array based on the result of the function. 

*/


// map 

// the map method is used for creating new array by exisitng one by applying a function to each one of the elements of the first array.


const nums = [1,2,3,4];

const multiplyThree = nums.map((num, index, array) => {
     return num * 3;

})

console.log(multiplyThree);


// Filter

//  Filter method takes each elemnt in an array and it applies a condition statement against it. if the condition returns true, the element gets pushed into the output array. 
// if condition returns false the element does not pushed in to the output array.

// ensure filter method returns only those elements from the array which fulfills provided criteria.



const nums1 = [1,2,3,4];

const moreThanTwo = nums1.filter((num1)=>{

    return num1 > 2;
})

console.log(moreThanTwo);


// reduce 

// reduce method reduces an array of values down to just one value.
// just like map and filter , reduce also executes callback for each element of the array.
//Note : it is taking callback function and intial value.
//  accumulator is the basically result of previous computation
// current value mean current element in the array.

 const nums2 = [1,2,3,4];

 const sum = nums2.reduce((acc, curr, i, arr)=>{

    return acc + curr;

 }, 0);

 console.log(sum);