
let obj = document.querySelector("#dynamic")
let strArr = ["Learn to HTML"];

let count = 0;

let max = strArr.length;

console.log(count + " , " + max);

function blinkLine(){
   obj.classList.toggle("add");
}

setInterval(blinkLine, 500);