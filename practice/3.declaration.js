//1. Declaration
var a;
var a;

// var can declare in same scope

let b;
//let b;
//Identifier 'b' has already been declared

//let can not be declare in same scope


//const c;
//Missing initializer in const declaration (at script.js:14:7)Understand this error

// the below one is fn , it is comes under shadowing

let i;
{
    let i;
}

//2. declaration without intialization

var x;

var y=5;

let d;

let e=5;

//const g;

//Missing initializer in const declaration 
// we should give value like below

const h=5;
console.log(h)
