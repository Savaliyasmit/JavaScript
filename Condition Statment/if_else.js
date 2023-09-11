// // 1.smallest number
// let a = 20, b =10;

// if (a<b) {
//     console.log("this is smallest value :",a);
    
// }
// else{
//     console.log("this is smallest value :",b);
// }

//2.positive or negative
// let a = -2 ;
// if (a<0) {
//     console.log("this a negative number : ",a);
    
// } else 
// {
//     console.log("this is positive number : ",a);
// }

//3.find its divisible 5 or 3 not
// let i = 30;

// if (i % 3 === 0 && i % 5 === 0) {
//     console.log("This is divisible", i, "by both 3 and 5.");
// } else if (i % 3 !== 0 && i % 5 !== 0) {
//     console.log("This is not divisible by 3 or 5.");
// } else {
//     console.log("This is divisible not neither 3 or 5, but not both.");
// }

//4.student marks pass or not
// let studentMarks = 88; // You can change this value to test different cases

// if (studentMarks >= 75) {
//     console.log("Student has passed.");
// } else {
//     console.log("Student has not passed.");
// }

// //5.year find its leap or not
// let a= 2021;
// if(a %4 == 0)
// {
//     console.log("year is leap year:",a)
// }
// else
// {
//     console.log("year is not leap year:",a)
// }


//6.a,b,c find largest number
// let a=20 ,b = 25 , c =30 ;

// if (a>b && a>c) {
    
//     console.log("largest number is :" ,a);
// }
// else if(b > c){
//     console.log("largest number is :  " ,b);
// }
// else{
//     console.log("Largest number is :" , c);
// }

//10.voting elegible or not

// let a = 15;
// if (a>18) {
//     console.log("this age person  elgible for vote = ",a);
// }
// else{
//     console.log("this age person was not elgible for vote =",a);
// }

//11.
// var unitsConsumed = 200; // Change this value to test different scenarios

// var firstRate = 0.60;  // 60P per unit for first 100 units
// var secondRate = 0.80; // BOP per unit for next 200 units
// var thirdRate = 0.90;  // 90P per unit beyond 300 units
// var minimumCharge = 50.00;
// var surchargePercentage = 0.15;
// var surchargeThreshold = 300.00;

// var totalAmount = 0;

// if (unitsConsumed <= 100) {
//     totalAmount = unitsConsumed * firstRate;
// } else if (unitsConsumed <= 300) {
//     totalAmount = 100 * firstRate + (unitsConsumed - 100) * secondRate;
// } else {
//     totalAmount = 100 * firstRate + 200 * secondRate + (unitsConsumed - 300) * thirdRate;
// }

// if (totalAmount < minimumCharge) {
//     totalAmount = minimumCharge;
// }

// if (totalAmount > surchargeThreshold) {
//     var surchargeAmount = totalAmount * surchargePercentage;
//     totalAmount += surchargeAmount;
// }

// console.log("Electricity bill for " + unitsConsumed + " units: Rs. " + totalAmount);

