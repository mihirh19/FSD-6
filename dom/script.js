function submit() {
   console.log("submit");
   let ullist = document.getElementById("stulist");
   let lilist = document.createElement("li");
   n = document.getElementById("name").value
   email = document.getElementById("email").value
   age = document.getElementById("age").value
   lilist.textContent = n + "  " + email + "  " + age;

   let removebtn = document.createElement("button");
   removebtn.textContent = "remove";
   removebtn.onclick = function () {
      ullist.removeChild(lilist);
   }
   lilist.appendChild(removebtn);

}