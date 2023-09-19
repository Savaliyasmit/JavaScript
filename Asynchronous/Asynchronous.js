//1.setTimeout() works after give time to execite 
//syntax:-setTimeout(function,milliseconds)
//1 seconds = 1000 miliseconds

//programe to call function after 3 seconds
// let test =()=>{
//         console.log(`no internet`);
//     }
    // console.log("wait for loading");
    // setTimeout(test , 3000);


    
//this function return a id 
// let intervalid = setTimeout(test,1000)
// console.log(`id : ${intervalid}`);



   //clearTimeout() stop a execution settimeout
//progrram to stop settimeout
// let count = 0

// let increse =()=>{
//     count +=1;
//     console.log(count);
// }
// let a= setTimeout(increse,3000)
// clearTimeout(a);
// console.log('settimeout is stopped');

//progrram to dislay every time every 3 second
// let time = ()=>{
//   let dateTime = new Date();

//   let ti =dateTime.toLocaleTimeString();
//   console.log(ti);

//  let a =  setTimeout(time , 2000)
// //  clearTimeout(a);
// //  console.log("time is stooped");
// }
// time();
//_______________________________________________________________________________________________________________

//setinterval():- function calling like a loop and settimeout() and you have pass multiple value pass
// let addtion=(a,...args)=>{
//     console.log(`${a}`);
//         let s = 0 ;
//      for(let i of args){
//         s +=i ;
//      }
     
//      console.log(s);
        
//     }
//     setInterval(addtion,1000,"addtion ",10,10,10,50,70)

 //setTimeout() stop function
    // let x =  setInterval(addtion,1000,"addtion ",10,10,10,50,70)
    // console.log(x);

