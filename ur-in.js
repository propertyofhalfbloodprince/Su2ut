const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
let menudivs = document.getElementById("menudivs");
let settingbutton = document.getElementById("settingbutton");
let checkmenu = document.getElementById("checkmenu");
let body = document.querySelector("body");
let escbutton = document.getElementById("escbutton");
let container=document.getElementById("container")
const enter=document.getElementById("enter")
// let hintflag = false;
// let menuflag = false;
// settingbutton.addEventListener("click", function () {
//   if(!menuflag){
//     if(!hintflag){
//       menudivs.classList.toggle("active");
//       canvas.classList.toggle("active");
//       container.style.display = "block";
//       menuflag = true;
//     }
//   }
// });
// escbutton.addEventListener("click", function () {
//   menudivs.classList.remove("active");
//   canvas.classList.remove("active");
//   menuflag = false;
// });
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// const toolbarImg = new Image();
// toolbarImg.src = "toolsbarnew.png";
// const toolbarImgWidth = 180;
// const toolbarImgHeight = canvas.height;
// const toolbarImgposX = canvas.width - toolbarImgWidth; 
// const toolbarImgposY = 0;
// toolbarImg.onload = function () {
//   c.drawImage(toolbarImg, toolbarImgposX, toolbarImgposY, toolbarImgWidth, toolbarImgHeight);
// };

// function showHintMessage() {
//   const hint_msg = document.getElementById("hint_msg");
//   hint_msg.style.display = "block";
//   canvas.classList.toggle("active");
// }
// function hideHintMessage() {
//   const hint_msg = document.getElementById("hint_msg");
//   hint_msg.style.display = "none";
//   canvas.classList.remove("active");
// }
// const hint_button = document.getElementById('hint_button');
// const hint_board = document.getElementById('hint_board');
// let ishelpimgvisible = false;
// hint_button.onclick = function() {
//   ishelpimgvisible = !ishelpimgvisible;
//   if (ishelpimgvisible) {
//     if(menuflag === false){
//       hint_board.style.display = 'flex';
//       showHintMessage();
//       hintflag = true;
//     }
//   }else{
//     if(menuflag === false){
//       hint_board.style.display = 'none';
//       hideHintMessage();
//       hintflag = false;
//     }
//   }
// };
function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
// let restarto=document.getElementById("restarto")
// restarto.addEventListener("click", function(){
//   window.location.replace("intro.html");
// })
// let menuexit=document.getElementById("menuexit")
// let babymenu=document.getElementById("menu4")
// let babymenu1=document.getElementById("menu1")
// let babymenu2=document.getElementById("menu2")
// let babymenu3=document.getElementById("menu3")
// menuexit.addEventListener("click", function(){
//   babymenu1.style.display="none";
//   babymenu2.style.display="none";
//   babymenu3.style.display="none";
//   menudivs.style.backgroundImage= "url(menublood.png)"
//   wait(2000).then(()=>{
//     menudivs.style.backgroundImage= "url(menu.png)"
//     babymenu1.style.display="flex";
//     babymenu2.style.display="block";
//     babymenu3.style.display="flex";
  
//   })

// })
var i = 0;
var j = 0;
var txt = "Good morning !😃☀️😊🥰💞 I see you've made it inside.. congratulations I suppose! Now all that's left is making it back outside... shouldn't be hard right ?";
var speed = 50;
function typeWriter() {
  if (i < txt.length && j<3) {
    document.getElementById("sumurs").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if(j<1){
    i=0;
    j++; 
    console.log(j);
    wait(2000).then(() => {
        typewriterrr.pause();
        sumurs.textContent="";
        wait(1000).then(() => {
            typewriterrr.play();
            txt="To achieve it you'd have to go through some typical new student procedure. That first requires you a visit to my lovely office( you'll be visiting there alot.. Complaining about grades and whatnot..but it's too early for that hh) ";
            typeWriter();
          });
          typewriterrr.pause();  
      });
      typewriterrr.pause(); 
  }
  else if(j>=1 && j<3){
    i=0;
    j++; 
    console.log(j);
    wait(2000).then(() => {
        typewriterrr.pause();
        sumurs.textContent="";
        wait(1000).then(() => {
            typewriterrr.play();
            txt="You'll be presented with some fun riddles that'll give you a taste of uni. Finish all to get your trusty courses and move on to your first class. Enjoy dear sa2ut :)";
            typeWriter();
          });
          typewriterrr.pause();  
      });
      typewriterrr.pause(); 
  }
else{
    typewriterrr.pause();
    wait(1000).then(() => {
      sumurs.classList.remove("active");
      wait(500).then(() => {
        window.location.replace("mktab.html");
      })
    })
}
}
var typewriterrr= document.getElementById("typewriterrr"); 
function playtypewriter() {
    typewriterrr.play();
  }
let sumur = document.getElementById("sumur");
window.onload = (event) => {
    wait(2000).then(() => {
        sumur.classList.toggle("active");
      });
  };
function susu(){  
    sumurs.classList.toggle("active");
    wait(1000).then(() => {
        playtypewriter()
        typeWriter();
      });
}
