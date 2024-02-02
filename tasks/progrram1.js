//1.1. Write a JS function that reverse a number. 

let rev = (num)=>{
   return (num.toString().split("").reverse("").join(""))
}
console.log(Number(rev("92347")));


//2.2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


// let str = (a)=>{
// let n = a.split("")
// let arr = n.sort().join("")
// console.log(arr);
// }
// str("webmaster")

//3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

// function uppercase(str)
// {
//   let array1 = str.split(' ');
//   let newarray1 = [];
    
//   for(let x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('web devlopment'));





//5. Write a JavaScript function that checks whether a number is perfect.
// function perfect(number)
// {
// var temp = 0;
//    for(var i=1;i<=number/2;i++)
//      {
//          if(number%i === 0)
//           {
//             temp += i;
//           }
//      }
   
//      if(temp === number && temp !== 0)
//         {
//        console.log("It is a perfect number.");
//         } 
//      else
//         {
//        console.log("It is not a perfect number.");
//         }   
//  } 
// perfect(28); 