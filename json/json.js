// JavaScript and JSON

// JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data.

//json was also same as javascript object but not same 

//1.javascriptobject
// let employe = {
//     firstName:"smit",
//     lastName :"savaliya",
//     age:70,
//     fun:function(){
//              return ("object print methods");
//     }
// };
//acess 
// console.log(employe);
// console.log(employe.firstName);
// console.log(employe.fun());


//json 
/// Note: JSON data requires double quotes for the key.
//json have not put function(methods) he throw a error
// We use the . notation to access JSON data. Its syntax is: variableName.key
//aso have create nested json object

// const data = {
//     "FirstName":"smit",
//     "LastName":"savaliya",
//     "age" :90,
//     "address":{
//          "pincode":395006,
//          "state":"gujarat",
//          "city":"surat"
//     }
// };

//json object access method
// console.log(data);
// console.log(data.LastName);
// console.log(data["FirstName"]);
// console.log(data.address);


//json objects warp a array
// const data = [{
//         "FirstName":"smit",
//         "LastName":"savaliya",
//         "age" :90
//     }];
    
//     console.log(data);

//you can covert json data into javascript object using bulit in fuction is JSON.parse() .

// const data2 = '{ "FirstName":"smit","LastName":"savaliya","age" :90,"address":{"pincode":395006,"state":"gujarat", "city":"surat"}}';


// const Obj = JSON.parse(data2)
// console.log(Obj);
// console.log(Obj.FirstName);
// console.log(Obj.LastName);


//you have javascript object convert json data
let employe = {
    firstName:"smit",
    lastName :"savaliya",
    age:70,
    fun:function(){
             return ("object print methods");
    }
};

const json =JSON.stringify(employe);
console.log(json);


