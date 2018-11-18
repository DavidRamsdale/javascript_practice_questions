// //Use ES6 whenever possible.

// /*
// CHALLENGE 1
// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.

// Use console.log() at the end of the sum() function to print result.
// */

// "use strict";

// // Write code here

// sum(1, 3);
// //4

// sum(10, 20, 5);
// //35

// sum(2, 5, 80, 1, 10, 12);
// //110

// /* 
// CHALLANGE 2
// Answer following Qustions:
// 1. Why no error is generated after the line 14?
// 2. Why after the line 19 TypeError is generated?

// Change one line of code so, that error will go away.
// Don't change lines 14, 19.
// */

// "use strict";

// const arr = [1, 2];

// arr.push(3);

// console.log(arr);
// // [1, 2, 3]

// arr = [1, 2, 3, 4];
// // BEFORE: Uncaught TypeError:
// // Assignment to constant variable.
// // AFTER: No error

// console.log(arr);
// // [1, 2, 3, 4]

// /* 
// CHALLENGE 3
// Change code to match output.
// */

// "use strict";

// var i = 10;

// for (var i = 0; i < 5; i++) {
// // some stuff
// console.log(i);
// }

// console.log(i);
// // It currently prints: 5
// // We want it to stay: 10

// /* 
// CHALLENGE 4
// Change code to fix first error after the line 15.
// Error after the line 20 should still be generated.
// */

// "use strict";

// let a = 5;
// let b = 10;

// if (b > a) {
// 	c = a + b + c;
// 	let c = 2;
// 	console.log(c);
// 	// BEFORE: Uncaught ReferenceError: c is not defined
// 	// AFTER: 17
// }

// console.log(c);
// // Uncaught ReferenceError: c is not defined

// /* 
// CHALLENGE 5

// Change contents of the isNumber function
// using ternary operator.
// */

// "use strict";

// function isNumber(a) {
// 	if (typeof a === "number") {
// 		return "That's number";
// 	} else {
// 		return "That's not a number";
// 	}
// }

// console.log(isNumber(10));
// // That's number

// console.log(isNumber("Hey there"));
// // That's not a number

// console.log(isNumber(true));
// // That's not a number

// /* 
// CHALLENGE 6

// Use arrow functions instead of functions
// where possible.
// */

// "use strict";

// function mult(a, b) {
// 	return a * b;
// }

// setTimeout(function() {
// 	console.log(mult(5, 10));
// }, 1000);
// // 50

// /* 
// CHALLENGE 7

// Answer following question:
// Set default value of the mult parameter
// in the multiplyBy() function.
// */

// "use strict";

// function multiplyBy(a, mult) {
// 	//The below line will break our logic, think about why.
// 	mult = mult || 2;

// 	console.log(a * mult);
// }

// multiplyBy(2);
// // should print - 4

// multiplyBy(2, undefined);
// // should print - 4

// multiplyBy(2, 0);
// // should print - 0

// multiplyBy(5, 10);
// // should print - 50

// /* 
// CHALLENGE 8 

// Throw Error when function square() is called
// without arguments.

// Create a new function and use it as default parameter to throw the error.
// */

// "use strict";

// function square(a) {
// 	console.log(a * a);
// }

// square(10);
// // 100

// square();
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires
// an argument!

// Callbacks

// function adder(x, y, callback) {
//     let answer = x + y;

//     if (callback) {
//         return callback(answer);
//     }

//     return answer;
// }

// function shout(input) {
//     console.log(`${input}!`);
// }

// function unrelated(){
//     console.log(answer);
// }
// let answer = adder(1,2, unrelated);
// console.log(answer);

// function wait(ms) {
//     let start = Date.now();
//     let now = start;

//     while(now - start < ms){
//         now = Date.now();
//     }
// }

// document.getElementById("button").addEventListener("click", () => {
//     wait(1000);
//     alert("yo");
// })

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }), 0;

// console.log(3);

// document.querySelector().
// array = [];
// document.querySelector("#button").addEventListener("click", () => {
//     console.log("clicked");
//         for (i = 0; i < 5; i++) {
//             $.get("https://api.chucknorris.io/jokes/random", (data) => {
//             console.log(data);
//             array.push(data.value);
//             });
//         if (array.length === 5 ) {
//             return console.log(array)
//         }
//     }
    
// });

// function callback(data){
//     for (i = 0; i < 5; i++) {
//         $.get("https://api.chucknorris.io/jokes/random", (data) => {
//         console.log(data);
//         array.push(data.value);
//         });
//     if (array.length === 5 ) {
//         return console.log(array)
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function chuckNorris(num, callback, array=[]){
//     url = "https://api.chucknorris.io/jokes/random";
//     $.get(url, (data) => {
//         array.push(data.value);
//     })
//     if (array.length === num){
//         return callback(array);
//     }

//     return chuckNorris(num, callback, array);
// }

// document.querySelector("#button").addEventListener("click", () => {
//     chuckNorris(5, (data) => {
//         console.log(data);
//     })
// });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(array);

// function eraser(text, callback) {
//     text = text.substring(0 , 3);

//     return callback(text);
// }

// eraser("class is awesome", (text) => {
//     console.log(`oh no what happened to: ${text}`);
// });

// function addAndThenHaveAtSomePoint(a, b, callback) {
//     setTimeout((a,b) => {
//         let answer = a +b ;

//         setTimeout(() => {
//             answer = answer / 2;
//             return callback(answer);
//         }), 2000;
//     }), 3000);
// }

// let calculation = addAndThenHaveAtSomePoint(10, 20, (value) => {
//     console.log(value);
// })

// Create a function that takes in a string and returns a callback that is the reverse of that string, in the callback log the string, reverse it again(should be the original) and log that string

// Create a function that adds all arguments give (number unknown)
// Then calls a callback with that answers
// in the callback log the answers.


function addAndThenHalveAtSomePoint(a, b, callback) {
    setTimeout(() => {
        let answer = a + b;

        setTimeout(() => {
            answer = answer / 2;
            return callback(answer);
        }, 2000);
    }, 3000);
}

let calculation = addAndThenHalveAtSomePoint(10, 20, (value) => {
    console.log(value);
});