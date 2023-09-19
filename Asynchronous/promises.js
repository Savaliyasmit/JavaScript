//promises
//create a promises() as a constructor

//this way to make promise
// let promises = new Promise(function(resolve ,reject){
    
// })

//progrram with promise
// const count = false ;

// let countValue = new Promise(function(resolve,reject){
//         {
//             if(count){
//                 resolve("there is count value ")  
//             }
//             else{
//                 reject("there is no count value")
//             }
//         }
// })

// console.log(countValue);

//remove to show promise  like this Promise { 'there is count value ' }

    
// countValue.then((result)=>console.log(result)).catch((err)=>console.log(err));

//then()
//  let countValue = new Promise(function (resolve, reject) {
//         resolve("Promise resolved");
//     });
    
    // executes when promise is resolved successfully
    //call without error resolve functioo
    
    // countValue.then(function successValue(result) {
    //     console.log(result);
    //     })
    
    //     countValue.then(function successValue1() {
    //     console.log("You can call multiple functions this way.");
    //     });

    //     countValue.then(function successValue2() {
    //     console.log("You can call multiple functions this way.");
    //     });
        
    //     countValue.then(function successValue3() {
    //     console.log("You can call multiple functions this way.");
    //     });
                

    //2.catch()->this function catch eror in function
    
    // returns a promise
    // let countValue = new Promise(function (resolve, reject) {
    //     const count =  40
    //     if(count >=15  && count<=15){

    //         resolve("succefully work")
    //     }
    //     else{
    //     reject('Promise rejected');
    //     } 
    // });
    
    // executes when promise is resolved successfully
    // countValue.then(
    //     function successValue(result) {
    //         console.log(result);
    //     },
    // )
    
    // executes if there is an error
    // .catch(
    //     function errorValue(result) {
    //         console.log(result);
    //     }
    // );



    //finally() 
    
    // // You can also use the finally() method with promises. The finally() method gets executed when the promise is either resolved successfully or rejected.
    
    // // returns a promise
    // let countValue = new Promise(function (resolve, reject) {
    //     // could be resolved or rejected  
    //     const fe= true ;
    //     if(fe){
    //     resolve('wait for loading....'); 
    //     }else{
    //     reject("not found data");
    //     }
    // });

    // // // add other blocks of code
    // countValue.then(result=>console.log(result)).catch((eror)=>console.log(eror)).finally(
    //     function greet() {
    //         console.log('sucessfully');
    //     }
    
    // );