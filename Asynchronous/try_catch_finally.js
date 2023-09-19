// The try, catch and finally blocks are used to handle exceptions (a type of an error).

// Types of Errors

// Syntax Error: Error in the syntax. For example, if you write consol.log('your result');, the above program throws a syntax error. The spelling of console is a mistake in the above code.

// Runtime Error: This type of error occurs during the execution of the program. For example,
// calling an invalid function or a variable.

// JavaScript try...catch Statement


// // The try...catch statement is used to handle the exceptions. 
    // try {
    //     // body of try
    // } 
    // catch(error) {
    //     // body of catch  
    // }


//display cathch a eror 
// const cal=   mul3= 30 ,  multi2  = 60

// try{
//         console.log("multificasion suscess:-" , mul3 * multi2);
//          console.log(a);
// }
// catch(error){
//     console.log('An error caught'); 
//         console.log('Error message: ' + error);  
// }


 // try {
    //     // try_statements
    // } 
    // catch(error) {
    //     // catch_statements  
    // }
    // finally() {
    //     // codes that gets executed anyway
    // }



    //try,catch,finally

//     const a = 40 , b =90
//     try{
//            console.log(a/b);
//            console.log(z);
//     }
//     catch(eror){
//          console.log("an error uncaught");
//          console.log(`Eror is :-${eror}`);
//     }
//  finally{
//     console.log("this is running");
//  }

// try...catch...throw Example
//this is inbulid throw new Error

// const a =90
// try{
//     if(a<20){
//            console.log(`this biiger `,a);
//     }
//     else{
//         throw new Error ("the number is low");
        
//     }
//     //there is not running while conditon was false
//     console.log("running");
// }
// catch(error) {
//             console.log('An error caught'); 
//             console.log('Error message: ' + error);  
//         }