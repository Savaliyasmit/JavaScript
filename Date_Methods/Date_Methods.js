/*
Date Object
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)

GMT = Greenwich Mean Time

JavaScript counts months from 0 to 11. January = 0 and December = 11
Specifying a month higher than 11, will not result in an error but add the
overflow to the next year.
Specifying a day higher than max, will not result in an error but add the
overflow to the next month.
*/

// let date = new Date()
// console.log(date);

// const d = new Date("April 20, 2024 18:45:00"); //you have converts string to date
// console.log(d);

// const d = new Date(2024 ,3); 
// console.log(d);

// const d = new Date(2024 ,11 , 20 , 12 , 33 , 44); 
// console.log(d);

// const d = new Date(100000000000); 
// console.log(d);

//get method
/*
getFullYear() Get Year as a four digit number (yyyy)
getMonth() Get Month as a number (0-11)
getDate() Get Day as a number (1-31)
getDay() Get WeekDay as a number (0-6)
getHours() Get Hour (0-23)
getMinutes() Get Minutes (0-59)
getSeconds() Get Seconds (0-59)
getMilliSeconds() Get MilliSeconds (0-999)
getTime() Get Time (milliseconds since january 1, 1970)
*/
//  let data = new Date()
// console.log(data.getFullYear());
// console.log(data.getMonth());
// console.log(data.getDay()); //1 to 6
// console.log(data.getHours());
// console.log(data.getMilliseconds());
// console.log(data.getDate());
// console.log(data.getMinutes());
// console.log(data.getSeconds());
// console.log(data.getTime());
//  console.log(data.getTimezoneOffset()); // 5 hours lets utc to india
//  console.log(data.getUTCDate());


//set Methods
/*
setFullYear() Set the Year (optionally month and day)
setMonth() Set the Month as a number (0-11)
setDate() Set the Day as a number (1-31)
setDay() Set the WeekDay as a number (0-6)
setHours() Set the Hours (0-23)
setMinutes() Set the Minutes (0-59)
setSeconds() Set the Seconds (0-59)
setMilliSeconds() Set the MilliSeconds (0-999)
setTime() Set the Time (milliseconds since january 1, 1970)
*/

// let d = new Date(0) /1970-01-01T00:00:00.000Z
// console.log(d);

// let da = new Date();

// let a = console.log(da); 
// console.log(da.setDate(23));
// console.log(da.setMonth(4));
// console.log(da.setFullYear(2022));
// console.log(da.setMinutes(34));
// console.log(da.setSeconds(23));




