// We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

// async function fun_name(parameter1, parameter2, ...paramaterN) {
    //     // statements
    // }

    // // fun_name - name of the function
    // // parameters - parameters that are passed to the function


    // Async 

// the async keyword is used before the function to represent that the function is asynchronous.
//you have also use then method
// this function returns a promise, you can use the chaining method then()


// async  function resol(){
//     console.log("hmm");

//      return Promise.resolve('sucessfully')



// }

//__________________________________________________________________________________________________________

// 2.JavaScript await Keyword

// The await keyword is used inside the async function to wait for the asynchronous operation.

// The syntax to use await is

{
    // let result = await promise;
}

// The use of await pauses the async function until the promise returns a result (resolve or reject) value.

//example:-

// let promises = new Promise((resolve, reject) => {
//            setTimeout(function(){
//                         resolve("fimding database")
//            },2000)
// })

// let asyncFunc= async ()=>{
//               // wait until the promise resolves 
//         let result = await promises; 
//         console.log(result);
//         console.log("succesfully"); 
// }

// asyncFunc();


// multiple promises 
// let promise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('Promise 1 resolved')
//     }, 10000);
// });
// let promise2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('Promise 2 resolved')
//     }, 20000);
// });
// let promise3 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('Promise 3 resolved')
//     },20000);
// });

// async function asyncFunc() {
//     let result1 = await promise1;
//     console.log(result1);
    
//     let result2 = await promise2;
//     console.log(result2);

//     let result3 = await promise3;

//     console.log(result3);
// }

// asyncFunc();

