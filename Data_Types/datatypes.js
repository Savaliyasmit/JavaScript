//hoisted method var datatype is (allow) to first assing value and after a declare

// x = 5 ;
// console.log(x) ;
// var x ;

//hoisted method let (not allow) to first assing value and after a declare
// j = 5;
// console.log(j);
// let j;

//hoisted method let (not allow) to first assing value and after a declare 
//  i = 5;
// console.log(i);
// const i;



          //var //
//your redeclare variable in var data type and this using global. update value not require block scope and with
//block scop   use 
/*
var x
x=50;
console.log(x);

var x;
x=80;
console.log(x);

console.log(x);
/*

                              //let//
// let data type not declare  , you have only one choice to redelare varriable usinng blockscop {}; ,
// when you update value with block scope after is value j varrible was print updated value 30.
/*
let j;
j=20 ;

// let j;
// j=30;
// console.log(j);

{
    j=30;
     console.log(j);
}
console.log(j);
//output = 30 30
*/


                     // const //
//value assign first 
/*
 const x = 20;
 console.log(x);
*/

 //value not updated in const 
 /*
 x=30;
 console.log(x);
 */

 //redelcre in block scop but not value update
 /*
 const x = 20;
 console.log(x);
 {
    const x = 30
    console.log(x);
 }
console.log(x);
*/