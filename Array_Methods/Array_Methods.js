/*
length
1.push               11.map               21.max
2.pop                12.every             22.min    
3.unshift            13.some              23.changing element
4.shift              14.filter            24.copyWithIn
5.concat             15.reduce
6.sort               16.reduceRight
7.reverse            17. find           
8.splice             18.findIndex
9.slice              19.entries
10.forEach           20.include   

*/

//all types of data type allow in array like number,float value,string,bollean
//  let array =  [1,2,55.55,'smit','savaliya',true,false,null] ;
// console.log(array);

//diffrent way to add index to araay
// let index = []
// index[0]=1
// index[1]=2
// index[2]=4
// index[3]=true
// console.log(index);

//calculate array length
// array [99] = 40
// console.log(array.length);
// console.log(array);

//undefined
// let reult = array[30]
// console.log(reult);

//conver to stringe
// let reult = array.toString()
// console.log(reult);

//1.push ->push element in array (last)
// let arry1 = [0,1,2,3,4,5,6]
// arry1.push(7,8,9,10,11,12,13,14)
// console.log(arry1);

//2.pop ->pop delete element in array (last)
// let arry2 = [0,1,2,3,4,5,6]

// arry2.pop()
// arry2.pop()
// arry2.pop()
// arry2.pop()
// arry2.pop()
// console.log(arry2);

//3.shift entre  element in array (first)
// let arry3 = [1,3,35,35,6,6,6]
// arry3.unshift(0,-1,-2,-3)
// console.log(arry3);


// //4.unshift delete  element in array (first)
// let arry4 = [1,3,35,5,6,6,6]
// arry4.shift()
// arry4.shift()
// arry4.shift()
// console.log(arry4);

//5.merge two array
// let a1 = [3,46,5,57,]
// let a2 = [58,59,60]
// let a3 = [true,false]

// let reult = a1.concat(a2,a3)
// console.log(reult);

//6.sort accending order array 
// let arry5 = [1,34,56,78,34,22,0]
// arry5.sort()
// console.log(arry5);

//7reverse use to array element reverse
// let arry6 = [5,4,32,5,2,535,33,0]
// arry6.reverse()
// console.log(arry6);

//8 splice methode :-The splice(position,removeelement,optional add element) method adds new items to an array.
// let num = [12,56,46,77,55,88]
// let result = num.splice(0,0,'mid')
// console.log(result);
// console.log(num);

//9.slice :-The slice() method slices out a piece of an array into a new array.
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source 
//ends not include

// let num = [12,56,46,77,55,88]
// // let result = num.slice(2)
// let result = num.slice(2,4)
// console.log(result);

//10.The forEach :- method calls a function (a callback function) once for each array elemetn
// let num = [12,56,46,77,55,88]
// let add = ' ' ;
// let result = num.forEach((val) =>{
                      
//  add += val + 60 + ` `
                
// })
// console.log(add);
// console.log(num);

//11.Map method:-
/*
The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.
*/
// let  num = [12,56,46,77,55,88,66,60]
// let add = num.map((val)=>{
//           return val + 45
// })
// console.log(add);
// console.log(num);

/*12.The every() :-method tests whether all elements in the array pass the test
implemented by the provided function. It returns a Boolean value.
*/
// let  num = [12,56,46,77,55,88,66,60]
// let result = num.every((val)=>{
//      return  val>100 && val<100
// })
// console.log(result); //give bollean value

/* 13.some :- The some() method tests whether at least one element in the array passes the test
implemented by the provided function. It returns true if, in the array, it finds an
element for which the provided function returns true; otherwise it returns false.it doesn't modify array
 */

// let  num = [12,56,46,77,55,88,66,60,101]
// let result = num.some((val)=>{
//      return   val>100
// })
// console.log(result); //give bollean value

//14.filter:-The filter() method creates a new array with array elements that pass a test.new array create

// let  num = [12,56,46,77,55,88,66,60,101]
// let result = num.filter((val)=>{
//      return    val>55
// })
// console.log(result);

/*
15.The reduce() method runs a function on each array element to produce (reduce it
to) a single value.
The reduce() method works from left-to-right in the array. 
two oprand addtion one bye one
*/
// let num = [12,56,46,77,55,88,66,60,101]
// let result = num.reduce((val,total)=>{
//              return val + total
// })
// console.log(result);

//16.Array reduceRight():-
/* The reduceRight() method runs a function on each array element to produce 
(reduce it to) a single value.
The reduceRight() works from right-to-left in the array */

// let num = [12,56,46,77,55,88,66,60,101,]
// let result = num.reduceRight((val,total)=>{
//              return val + total
// })
// console.log(result);

//17.find method :-
/*
The find() method returns the first element in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned
*/

// let num = [1,12,56,46,77,55,88,66,60,101]
// let result = num.find((val)=>{
//              return val<56
// })
// console.log(result);

//18.findIndex()
/* The findIndex() method returns the index of the first element in an array that
satisfies the provided testing function. If no elements satisfy the testing function,
-1 is returned. */

// let num = [1,12,56,46,77,55,88,66,60,101]
// let result = num.findIndex((val)=>{
//              return val>55
// })
// console.log(result);

//19.entries()=>The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
//create like map key and value providing index and element in array 

//  let num = [1,12,56,46,77,55,88,66,60,101]

//  let result = num.entries();
//  console.log(result.next().value);
//  console.log(result.next().value);

// for(let i =0 ; i<5 ; i++){
//     console.log(result.next().value);
// }

/*20.includes()
includes() :-  This allows us to check if an element is present
in an array (including NaN, unlike indexOf).
The Array.includes() method determines whether an array includes a certain
value among its entries, returning true or false as appropriate.
*/
// let arr = ["hello",9,10,14,13]
//  let result = arr.includes(9)
// let result1 = arr.includes(90)
// console.log(result);

// //21.Array Max():-
// // The Math.max.apply to find the highest number in an array.
// let num = [1,12,56,46,77,55,88,66,60,101]
// let result =(arr)=>{
//     return Math.max.apply(null,arr);
// }
// console.log(result(num));

//22.Array min():-
// The Math.min.apply to find the lowest number in an array.
// let num = [1,12,56,46,77,55,88,66,60,101]
// let result =(arr)=>{
//     return Math.min.apply(null,arr);
// }
// console.log(result(num));

//23.changing element:-
//Array Changing Elements:-
//Array elements are accessed using their index number.
// let num = [343,57,34,78,5,4]
// num[0] = 44
// console.log(num);

//24.copyWithin
/*
The copyWithin() method copies array elements to another position in the array.
The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the arra
*/
// let arr = [34,56,7,8,99,10]
// let result = arr.copyWithin(2,0,2)
// console.log(result);