function logOut(element){
    element.innerText = "logout";
}

function myFunction(){
    alert("Ninja was liked");
}


var count = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("display");

btn.onclick = function (){
    count++;
    disp.innerHTML = count;
}