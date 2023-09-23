function message() {
    alert(" i am here ");
}

function dateshow(){
    document.getElementById("date").innerHTML = Date();
}

function uppercase(){
    const change = document.getElementById("emails"); 
    change.value = change.value.toUpperCase();
       return
}

function red(one){
    one.style.color= "red";
}


function Down(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function Up(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }


  /* JavaScript addEventListener() */
//   The addEventListener() method makes it easier to control how the event reacts to bubbling.
// When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.
// You can easily remove an event listener by using the removeEventListener() method.

//element.addEventListener(event, function, useCapture);


const x = document.getElementById("clickIt")

x.addEventListener("click",RespondClick)
function RespondClick() {
    document.getElementById("effect").innerHTML +=
              "Click Event" + "<br>";
}

const y = document.getElementById("hoverPara")
  
y.addEventListener("mouseover",RespondMouseOver)
function RespondMouseOver() {
    document.getElementById("effect").innerHTML +=
               "MouseOver Event" + "<br>";
}

y.addEventListener("mouseout",RespondMouseOut)  
function RespondMouseOut() {
    document.getElementById("effect").innerHTML +=
              "MouseOut Event" + "<br>";
}