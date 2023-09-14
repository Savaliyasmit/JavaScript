// 1.create Object means keys and value a pair
//acess a object properties use dot opertor (.)
// const person = {
//      firstName : "milan",
//      lastName  : "savaliya",
//      age : 18 ,
//      phoneNumber : 9913140707,
//      join :function(){
//           return `the first name is ${this.firstName}.the last name is  ${this.lastName}.
//           and phoneNumber is  ${this.phoneNumber}`
//      }
// }
//acces method to call object properties
// console.log(person.join());
// console.log(person);
// console.log(typeof(person));
// console.log(person["age"]);

//call as varible
// let a = "age";
// console.log(person[a]);

//delete object pair use delete key
// delete person.age
// console.log(person);




//2.object creat as construtor
/*
const con =  new Object()
 //add properties

 con.studentName = "smit,milan,sandip"
 con.GRid =1821,
 con.RollNumber = 74,
 con.EnrollmentNumber = 2214103244
 con.abc= function (a,b) {
       console.log("hello smit");
       return a + b ;
 }
 */
//  console.log(con.abc()); this is not right method
//console.log(con.abc(34,34));


//3.nested object 
// const person1 = {
//      firstName : "milan",
//      lastName  : "savaliya",
//      age : 18 ,
//      phoneNumber : 9913140707,
//      address :{
//            state : "gujarat",
//            countryCode: 91,
//            city : "surat"
//      },
//      join :function(){
//           return `the first name is ${this.firstName}.the last name is  ${this.lastName}.
//           and phoneNumber is  ${this.phoneNumber}`
//      }
// }
// console.log(person1);
// console.log(person1.address.countryCode)



//4.assign method to copy object another varrible
// let copy = {};
// Object.assign(copy,person1)
// console.log(copy);