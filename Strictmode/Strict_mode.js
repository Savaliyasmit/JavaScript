//use strict mode write in top "use strict"

//1.// "use strict"
// a =  40
//throw eror

//2."use strict" in function
// "use strict"
// myFunction();

// 3.function myFunction() {
//   y = 3.14;   // This will also cause an error because y is not declared
// }

//4.this will effect to use strict mode inside function locally use
// a ="smit"
// console.log(a);      // This will not cause an error.


// 4.function myFunction() {
    
//   "use strict";
//   y = 3.14;   // This will cause an error
// }

// console.log(myFunctio);


//5.deleting  varible not work in "use strict" mode
// "use strict";
// let x = 3.14;
// delete x;                // This will cause an error


//6.Deleting a function is not allowed.

// "use strict";
// function x(p1, p2) {
//     console.log("hii");
// };
// delete x;                // This will cause an error 

// 7.Duplicating a parameter name is not allowed:

// "use strict";
// function x(p1, p1) {

// };   // This will cause an error


// 8.Octal numeric literals are not allowed:

// "use strict";
// let x = 010;            // This will cause an error
// console.log(x);

// 9.Writing to a read-only property is not allowed:

// "use strict";
// const obj = {};
// Object.defineProperty(obj, "x", {value:0, writable:false});

// obj.x = 3.14;            // This will cause an error


// / 10. Deleting an object is not allowed.


    //  'use strict';
    
    // let person = {name: 'Carla'};
    
    // delete person; // throws an error


    // 9. The variable name arguments and eval are not allowed.
      
    // 'use strict';
    
    // let arguments = 'hello'; // throws an error
    
    // let eval = 44;

    
// 10. You cannot also use these reserved keywords in strict mode.

// implements interface let package private protected public static yield


// Benefits of Strict Mode

// The use of strict mode:

// helps to write a cleaner code
// changes previously accepted silent errors (bad syntax) into real errors and throws an error message
// makes it easier to write "secure" JavaScript