function add() {

   var a = parseInt(document.getElementById("no1").value);
   var b = parseInt(document.getElementById("no2").value);
   var result = a + b;
   alert("The result is " + result);
   console.log("The result is " + result);
   document.getElementById("result").value = result;
}

function sub() {

   var a = parseInt(document.getElementById("no1").value);
   var b = parseInt(document.getElementById("no2").value);
   var result = a - b;
   alert("The result is " + result);
   console.log("The result is " + result);
   document.getElementById("result").value = result;
}

function mul() {

   var a = parseInt(document.getElementById("no1").value);
   var b = parseInt(document.getElementById("no2").value);
   var result = a * b;
   alert("The result is " + result);
   console.log("The result is " + result);
   document.getElementById("result").value = result;
}


function div() {

   var a = parseInt(document.getElementById("no1").value);
   var b = parseInt(document.getElementById("no2").value);
   var result = a / b;
   alert("The result is " + result);
   console.log("The result is " + result);
   document.getElementById("result").value = result;
}