
let target = document.querySelector("#dynamic");

console.log("target:"+target);
function blink(){
   target.classList.toggle("active");
}

setInterval(blink, 500);
//setInterval 무한 반복, setTimeout 한번 실행
