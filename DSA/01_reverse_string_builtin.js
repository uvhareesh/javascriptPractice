function revString(str){
return str.split("").reverse().join("");
}

let str="Hello World";
console.log(revString(str));

/* Explanation:
1. The function `revString` takes a string `str` as input.
2. It uses the `split("")` method to convert the string into an array of characters.
3. The `reverse()` method is then called on the array to reverse the order of the characters.
4. Finally, the `join("")` method is used to concatenate the reversed array back into a string, which is returned as the output. */

