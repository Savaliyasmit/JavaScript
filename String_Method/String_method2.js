/*
8.replace()
9.replaceAll
10.trim()
11.trimStart()
12.trimEnd()
13.padStart()
14.padEnd()
15.charAt()
16.charCodeAt()
17.spilit()
*/

//8. replace and 9.replaceAll
//let string = "hi my name is smit , my smit "
// console.log(string.replace("name" , "no"));  
//case senstive use of rajacts like /smit/i ->in-sensative ,/smit/g global match
// let result = string.replace(/smit/i ,"no");

///smit/g global match with regex
// let result = string.replace(/smit/g ,"no");
// console.log(result);

//.replaceall globally all 
// let result = string.replaceAll("smit" , "milan")
// console.log(result);

//10.trim , 11.trim start and 12.trim end
// let space = "    myname         "
// let result = space.trim();
// let result = space.trimStart();
// let result = space.trimEnd();
// console.log(result);
// console.log(result.length);

//13.padstart and 14.padend
// let text="34"
// let padded =  text.padStart(5,"l")

//padend
//  let text="34"
//  let padded =  text.padEnd(5,"l")
// console.log(padded);

//number convert to string using toString()
// let text=34
// let converString =  text.toString();
// console.log(converString);
// let padded = converString.padStart(5,"l");
// console.log(padded);

//15.char() provide string of index and charAt()  give you string character ascii value
// let index = 'my name is smit'
// let result = index.charAt(5);
// console.log(index);

//charAt 
// let ascii = 'my name is smit'
// let result = ascii.charCodeAt(6);
// console.log(result);

//splilt covert in array
// let array = "s,mit, sava,liya"
// let result = array.split("s");
// console.log(result);



