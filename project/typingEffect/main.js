
let target = document.querySelector("#dynamic");

function blink(){
   
   target.classList.toggle("active");
}

setInterval(blink, 1000);
//setInterval 무한 반복, setTimeout 한번 실행
