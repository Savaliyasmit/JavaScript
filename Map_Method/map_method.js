//map like object as work 
//methods :-
/*
Set()
get()
has()
delete()
entries()
foreach()
size()
*/

//declaration and assing key and values

// const data =new Map([
//         ["surat",40] ,
//         ["ahmdabad",30], 
//         ["vesu" ,10] ,
//         ["hirabag" ,50], 

// ]) 
 
//console.log(data);    print map

//console.log(data.set("city",30));  //add filed in map

//console.log(data.get("surat"));    find key value

//console.log(data.has("hirabag"));  find key was found true otherwist not key found was false

//console.log(data.entries());    properview to see map

//console.log(data.size);   map size = 4

//for each:- orignal map convert a array

// let a = " ";

// data.forEach(function(value,key) {
    
//     a += key + " = " + value + "\n" ;
// }) 

// console.log(a);

//map intiliztion use set method

const hello = new Map();    //intialization
hello.set ("school" , 500) ;
hello.set ("collage" , 500) ;
hello.set ("men" , 500) ;
hello.set ("women" , 500) ;

//console.log(hello);

//console.log(hello.set("other" , 40));

// console.log(hello.delete("collage"));
// console.log(hello);

// console.log(hello.entries());

//console.log(hello.size);

//console.log(hello.get("women"));

//console.log(hello.has("school"));

