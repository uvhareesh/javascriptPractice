function revString(str){

    let i = str.length - 1;
    let reversed = "";

    while(i>=0){

        reversed += str[i];
        i--;
    }

    return reversed;
}
console.log(revString("Harish"));

/* Explanation:
1. The function `revString` takes a string `str` as input.
2. It initializes a variable `i` to the index of the last character of the string (`str.length - 1`) and an empty string `reversed` to store the reversed version of the input string.      
3. A `while` loop is used to iterate through the input string in reverse order, starting from the last character (index `i`) down to the first character (index `0`).
4. Inside the loop, each character is appended to the `reversed` string using the `+=` operator, and the index `i` is decremented by 1 to move to the previous character.
5. After the loop completes, the fully reversed string is returned as the output. */








































