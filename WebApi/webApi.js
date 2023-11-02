
//use a fetch api to fetch data in object to json after respons,this is promise
//fetch is inbuild function
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(Response => Response.json())
// .then(json => console.log(json))



// json convert javascript object convert array 
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response =>response.json())
// .then((data)=>{
//         for(var x in data){
//             console.log(data);
//             document.write(`${data[x].name}`)
//             document.write(`${data[x].email}`)
//             document.write(`${data[x].username}`)

//         }
// })
// .catch((error) =>{
//     document.write("file can t fetch " , error)
// })


//user entre data  as object stringfy convert jsonformat this post method send data a server after respones in object user see
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:'POST',
//     body :JSON.stringify({

//         tital:"smit1",
//         body:"bar",
//         userId:"34"


//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },

// })
// .then((response)=>response.json())
// .then((json)=>console.log(json))
  



//when user entre data object convert data jsonstringfy().user have responed convert objects see.
//this is post method send data api 
// var userss = {
//     Name:"smit",
//     userId: 101,
//     id: 61,
//     title: "voluptatem doloribus consectetur est ut ducimus"
//   }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//  method: 'POST',
//  body: JSON.stringify(userss),
//  headers: {
//    'Content-type': 'application/json; charset=UTF-8',
//  },
// })
//  .then((response) => response.json())
//  .then((json) => console.log(json));
