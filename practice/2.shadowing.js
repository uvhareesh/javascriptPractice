
//variable shadowing

// function test(){


// let a="Hello";
// if(true){

//     let a ="Hi";
//     console.log(a);
// }

// console.log(a);

// }

// test();

//illegal shadowing

function test(){

    var a = "hi";
    //let b = "bye";

    if(true){

        let a = "Hello";
        var b = "Good Bye";
        console.log(a);
        console.log(b);
    }
}
