
function submit() {
   console.log("submit");
   const ullist = document.getElementById("stulist");
   let lilist = document.createElement("li");
   n = document.getElementById("name").value
   email = document.getElementById("email").value
   age = document.getElementById("age").value
   divname = document.createElement("div");
   divemail = document.createElement("div");
   divage = document.createElement("div");
   divname.setAttribute("class", "namehi");
   divemail.setAttribute("class", "emailhi");
   divage.setAttribute("class", "agehi");
   divname.textContent = n;
   divemail.textContent = email;
   divage.textContent = age;
   lilist.appendChild(divname);
   lilist.appendChild(divemail);
   lilist.appendChild(divage);

   //lilist.innerHTML = "<div class='namehi'>" + n + "</div> " + "<div class='emailhi'>" + email + "</div> " + "<div class='agehi'>" + age + "</div> ";
   // lilist.textContent = n + "  " + email + "  " + age;

   let removebtn = document.createElement("button");
   removebtn.textContent = "remove";
   removebtn.onclick = function () {
      ullist.removeChild(lilist);
   }
   lilist.appendChild(removebtn);

   ullist.appendChild(lilist);

}

function namehi() {
   const namehiele = document.getElementsByClassName("namehi");
   for (n of namehiele) {
      n.style.color = "red"
   }
}

function emailhi() {
   const emailhiele = document.getElementsByClassName("emailhi");
   for (n of emailhiele) {
      n.style.color = "blue"
   }
}

function agehi() {
   const agehiele = document.getElementsByClassName("agehi");
   for (n of agehiele) {
      n.style.color = "orange"
   }
}