/*
1.anonymous  Function
2.function constructor(this function use less in javascript)
3.Arrow function(=>) ES6 (don't use function keyword )
4.IIFE->imidentily invoking invoking function expression (the fuction call automatially call for self)
5.function objects -> 
6.this keyword-> this. use the property frome objects
7.rest parameter
8.generator(use rect side most)
*/

//1.anonymous  Function
  
//1.with argu with return
// let addtion = function(a,b){
//           return a*b;
// } 
// console.log(addtion(50,50));

//2.function constructor
// let x = new Function("a","b", "return a+b")

// console.log(x(1,5));

//3.Arrow function define arrow
//ES5 define function
// function addtion(a,b) {
//     return a+b;
// }
// console.log(addtion(34,55)); 

//ES6 define finction
// let x = (a,b) =>{

//      let division = a / b;
//     return  Number(division.toFixed(3));
// }
// console.log(x(20,30));

// only use this  method single statment return
// let y = (a,b,c,d,f,s) => a*b*c*d*f*s;
// console.log(y(34,35,46,67,67,34));

//4.IIFE->imidentily invoking invoking function expression
// (function() {
//     console.log("hello ...smit");
// })();
// ((a,b)=>{

//     console.log("my name is :-",a*b);
// })(22,3);

//5.Function objects
// 1.
// function SumAll() {
//     return arguments.length.toString();
// }
// let text = SumAll(1,2,3,4,5,6,7,8);   //is loke array [1,2,3,4,5,6,7,8]
// console.log(text);

//2.
// function lensum(){
//     let x = 0;
//     for( i=0 ;i<arguments.length ;i++){
//         x += arguments[i] ;
//     }
//     return x ;
// }
// let result = lensum(1,2,3)
// console.log(result);

//6.this keyword
// let person = {
//     Firstname : "smit",
//     Lastname  : "savaliya",
//     age       : 18,
//     Fullname: function(){
//           return `${this.Firstname} ${this.Lastname}`
//     } 
// }

// console.log(person.Fullname());
// console.log(person.Lastname);

//7.callback Function (most used in javascript)

// let x = ()=>{
//           console.log("helloe ...");
// }

// let b = (s,callback)=>{
//         console.log("hiii...",s);
//         callback();

// }
// b("peter",x);