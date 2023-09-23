// getElementById() – select an element by id.
// getElementsByTagName()  – select elements by a tag name.
// getElementsByClassName() – select elements by one or more class names.
// querySelector()  – select elements by CSS selectors.


//1.getElementById
//first target id

// function changeIt(){
//      const cr =  document.getElementById("id1")
//      cr.innerHTML = "no have metting" ;

//       document.getElementById("id2").innerHTML = "no i don't go " ;

// }

// //alert
// const node1= document.getElementById("id2");
// const node2 = document.getElementById("id3")

// function textNode1(){
//     alert(node1.innerHTML);
// }
// function textNode2(){
//     alert(node2.innerHTML);
// }



//2.getElementsByTagName()
//change color
// const elements = document.getElementsByTagName("p");
    
// function changeColor(){
//     for(let i = 0 ; i<elements.length ; i++){
//               if(i == 0){
//                        elements[i].style.color = "red";
//               }
//               else{
//                 elements[i].style.color = "blue"
//               }
//     }
// }


//3. getElementsByClassName()
// const  ch =  document.getElementsByClassName("blue")

// function changeColor(){
//     for(let i = 0 ; i<ch.length ; i++){
//         ch[i].style.color = "red"
//     }
// }

//4.querySelector()
// const element = document.querySelector(".demo");
// console.log(element);

// function changeColors() {
//   element.style.color = "red";
// }


//5.queryselectorAll()
// const elements = document.querySelectorAll("#sun p");
//     console.log(elements);

//     function changeColorss() {
//       for (let i = 0; i < elements.length; i++) {
//         elements[i].style.color = "red";
//       }
//     }