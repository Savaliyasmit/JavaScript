/*
A regular expression is a pattern of characters.

The pattern is used for searching and replacing characters in strings.

The RegExp Object is a regular expression with added Properties and Methods.
*/

// let strings = ` i am smit are savaliya.i am 19 years OLD why are you old 20 30 smit@.com` 

//1.i -> insensitive
// let regular = /old/i;
// let result = strings.match(regular);

// 2.g->global match
// let regular = /i/g;
// let result = strings.replace(regular,'s');
// console.log(result);

//3.m->multiline check
// let regular = /are/m;
// let result = strings.match(regular);
// console.log(result);

// 3./\d/g-> find digit in strings
// let regular = /\d/g;
// let result = strings.match(regular);
// console.log(result);

//4./\s/g->match a white space
//  let regular = /\s/g;
//  let result = strings.match(regular);
// console.log(result);

//5./\b/g->find start of word
//  let regular = /m\b/g;
// let regular = /\bss/g;
//  let result = strings.match(regular);
// console.log(result);

//6.[] Brackets :-[abc] specifies matches for the characters inside the brackets.
//Brackets can define single characters, groups, or character 
//^ means not 0-9 above match
// let regular = /[0-9]/g;
// let regular = /[^0-9]/g;
// let result = strings.match(regular);
// console.log(result);

//7.| or match spcified 
// let text = "re, green, red, green, gren, gr, blue, yellow";
// let regular = /(red|green|blue)/g;
// let text = "9324729479";
// let regular =  /(9|7|4)/g;
// let result = text.match(regular);
// console.log(result);

//online regx to find emil,mobile number validation in javascript
//website for regx lib->https://www.regexlib.com/Search.aspx?k=Email+all+country+&c=-1&m=-1&ps=20;
// let number = `+919913140707`
// let reg = /^((\+91)?|91)?[789][0-9]{9}/;
// let result = number.match(reg)
// console.log(result);
