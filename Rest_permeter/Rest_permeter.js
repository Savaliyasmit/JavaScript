//Restparameter  function,array,object

//function used in function like array

// let product = (name,Rollnumber,...args)=>{
//     console.log(`the marks ${name}  and course is ${Rollnumber} fee is :-` );
//      let s = 1 ;
//      for(let i of args){
//         s *=i ;
//      }
     
//      return s;
// }

// console.log(product("smit","BCA",556,5656,56,));
// console.log(product("milan","BA",56,6,565));
// console.log(product("sandip","medical",565,544,6,565));



//REST parameter in array
// let arr1 = [3,5,33,5,2,6767,6767]
// let arr2 = [...arr1]

// console.log(arr1);
// console.log(arr2);

// arr1.push("helloo")
// console.log(arr1);
// console.log(arr2);

//rest operater in object
let ob1 ={x:1 , y:2}
let b ={z:10 , p:90 ,h:90 } 
let c = {ob1,...b} 

// console.log(c);

ob1.n = 60
// console.log(ob1);

// console.log(c);