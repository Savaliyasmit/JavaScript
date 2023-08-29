// Converting Variables to Numbers

//IMp:-
// Number()	Returns a number converted from its argument.
// parseFloat()	Parses its argument and returns a floating point number
// parseInt()	Parses its argument and returns a whole number

//1.Number()

// let x = "1215"
// let y = "12+15"
// console.log(Number(x));
// console.log(Number(y));
// console.log(Number(false)); bollean convert into number
//console.log(Number(`10 20 30`)); return Nan because space not requir to convert number

//2.parseInt() and  parseFloate()
//console.log(Number.parseInt(1.25));  convert number into integer
//console.log(Number.parseFloat(1.5677)); covert float 

//3.insafe integer 
// console.log(Number.isSafeInteger(3242354357834875834583457)); check to inerger range 

// console.log(Number('155 + 155')); Nan
// console.log((166 + 166).toString()); 336 string

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("10"));
// console.log(Number("  10"));
// console.log(Number("10  "));
// console.log(Number("10.33"));
// console.log(Number("10,33")); Nan 
// console.log(Number("10 33")); Nan
// console.log(Number("smit")); Nan
// console.log(Number("10 + 13")); Nan
