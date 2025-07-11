// script.js
// alert("Hello, this is JavaScript file!");

// var number = prompt("koi number do ")

// num = Number(number)

// if ( num % 2 === 0){
//     console.log("Ye even number hai")
// } else{
//     console.log("Ye odd number hai")
// }





// ye code he sirif string ke liye ,, ke jab koi user number enter kare to sorry ae or jab koi name likhe to if chale 

// var namee = prompt("apna name batao ")

//  var nam = namee

// if( isNaN(nam)){
//     console.log("hy " + nam)
// }else{
//     console.log("sorry plz enter your name ")
// }




// var hederText = prompt("YAHA APNA TEXT DALI")


// var headingElement = document.getElementById("text")

// headingElement.innerText = hederText



// function btn() {
//     var promptBtn = prompt("yahaapna name dalo ")
    
//     var edidtingElement = document.getElementById("text")
    
//     edidtingElement.innerText = promptBtn
// }



 function btn(value) {
      document.getElementById("myInput").value += value;
    }

    function clearInput() {
      document.getElementById("myInput").value = '';
    }

    function backspace() {
      let input = document.getElementById("myInput");
      input.value = input.value.slice(0, -1);
    }

    function calculate() {
      try {
        let result = eval(document.getElementById("myInput").value);
        document.getElementById("myInput").value = result;
        
      } catch (e) {
        document.getElementById("myInput").value = 'Error';
      }
    }

 function btn(value) {
  let input = document.getElementById("myInput");
  let current = input.value;

   const operators = ['+', '%', '*', '/'];

  // ❌ Prevent multiple starting operators
  if (current === "" && operators.includes(value)) {
    return; // agar input empty hai to operator add na ho
  }
   if (current === "-" && value ==="-") return

  // ❌ Prevent multiple starting zeros
  if (current === "0" && value === "0") return;

  // ✅ Replace starting 0 if next value is number (not operator or dot)
  if (current === "0" && !isNaN(value) && value !== ".") {
    input.value = value;
    return;
  }

  // ❌ Prevent multiple dots in the same number
  if (value === ".") {
    let parts = current.split(/[\+\-\*\/]/);
    let lastPart = parts[parts.length - 1];
    if (lastPart.includes(".")) return;
  }

  input.value += value;
}

