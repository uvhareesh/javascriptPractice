//hoisting

//During the creation phase  javascript engine moves variables and function declaration in top of your code. this is call hoisting

//For Var  
// Error : undefined

// console.log(b);
// var b=2;

// For Let 
//Error: Cannot access 'x' before initialization

// console.log(x);

// let x = 1;
// var z = 2;

// // For Const
//Error : Cannot access 'z' before initialization

// console.log(z);

// const z=2;

// function abc(){

//     console.log(a);
//     var a=1;
// }
// abc();

function abc(){

    console.log(a,b,c);

    const a=1;
    let b=2;
    var c=3;
}
abc();

