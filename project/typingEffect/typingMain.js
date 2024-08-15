
let target = document.querySelector("#dynamic");

function makeArr(){
   let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript","Learn to Python","Learn to Ruby"];

   let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];

   let selectArr = selectString.split("");

   return selectArr;
}

function resetTyping(){
   target.textContent = "";
   dynamic(makeArr());
}

function dynamic(randomArr){
   if(randomArr.length > 0){
      target.textContent += randomArr.shift();
      setTimeout(function(){dynamic(randomArr)},100)
      //setTimeout(dynamic(randomArr),100)

      /*
      setTimeout(function(){dynamic(randomArr)},100) - 1)
      setTimeout(dynamic(randomArr),100)             - 2)

      1)은 function()이란 익명의 함수를 만들어서 dynamic을 실행. 이때 재귀함수 dynamic자체가 새로 실행
      2)는 바로 dynamic()를 호출한거기 때문에 dynamic의 return값을 결과로 돌려줌
      1)은 제대로 동작, 2)는 오류 발생
      즉, 재귀함수로 사용시에는 function을 사용해야함
      */


   }else{
      setTimeout(resetTyping,100);
      //setTimeout(function(){resetTyping()},100);

      /*
      setTimeout(function(){resetTyping()},100); - 1)
      setTimeout(resetTyping,100);               - 2)
      
      1)과 2)의 기능상의 차이점은 거의 없음 재귀가 아니기 때문에.
      다만 1)은 function(){
               console.log("추가적인 기능 구현 가능")
               resetTyping()
               },100);
            과 같이 function 안에서 추가적인 기능을 구현할 수 있음
      */
   }
}

dynamic(makeArr());

function blink(){
   target.classList.toggle("active");
}

setInterval(blink, 500);
//setInterval 무한 반복, setTimeout 한번 실행

