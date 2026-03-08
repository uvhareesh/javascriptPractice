
function revString(str){
let reversed = "";
for(let i=str.length-1;i>=0;i--){
	
	reversed +=  str[i];

}

	return reversed;

}

console.log(revString("Harish"));

/* Explanation:
1. The function `revString` takes a string `str` as input.
2. It initializes an empty string `reversed` to store the reversed version of the input string. 
3. A `for` loop is used to iterate through the input string in reverse order, starting from the last character (index `str.length - 1`) down to the first character (index `0`).
4. Inside the loop, each character is appended to the `reversed` string using the `+=` operator.
5. After the loop completes, the fully reversed string is returned as the output. */    