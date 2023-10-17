const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const canvasa = document.getElementById("canvasa");
const ctx = canvas.getContext("2d");
let menudivs = document.getElementById("menudivs");
let settingbutton = document.getElementById("settingbutton");
let checkmenu = document.getElementById("checkmenu");
let body = document.querySelector("body");
let escbutton = document.getElementById("escbutton");
let arrow = document.getElementById("arrow");
let container=document.getElementById("container")
const enter=document.getElementById("enter")
const key22=document.getElementById("key22")
let hintflag = false;
let menuflag = false;
let musicss=document.getElementById("musicss")
let musicswaves=document.getElementById("musicswaves")
let musicssflag=false;
let divs=document.querySelectorAll(".aaws")
// function zoomOutthenIn(){
//   divs.forEach((div) => {
//     div.classList.add('animate__animated', 'animate__zoomOut');
//  div.style.setProperty('--animate-duration', '1.5s');
// div.style.opacity=0.3;
//   wait(400).then(() => {

//     div.style.opacity=1;
   
  //   div.classList.remove('animate__animated', 'animate__zoomOut');
  //   div.classList.add('animate__animated', 'animate__zoomIn');
  //   div.style.setProperty('--animate-duration', '2s');
  // //   wait(3000).then(() => {
  //    div.classList.remove('animate__animated', 'animate__zoomIn');
      
  // })
//   wait(1000).then(() => {
//   zoomOutthenIn();
//   })
//     }) 
   
//   })
  
// }
// zoomOutthenIn();
        musicss.addEventListener("click", function(){
          if(!musicssflag){
            musicswaves.style.display="block"
            musicswaves.classList.add('animate__animated', 'animate__tada');
            musicswaves.style.setProperty('--animate-duration', '1.5s');
        wait(1500).then(() => {
          musicswaves.classList.remove('animate__animated', 'animate__tada');
          musicssflag=true
        })
          }
          
          else{
            musicswaves.classList.add('animate__animated', 'animate__tada');
            musicswaves.style.setProperty('--animate-duration', '1.5s');
           wait(1300).then(() => {;
           musicswaves.style.display="none"
           musicssflag=false
          })
  
        }
       
      })
settingbutton.addEventListener("click", function () {
  if(!menuflag){
    if(!hintflag){
      menudivs.classList.toggle("active");
      menudivs.classList.add('animate__animated', 'animate__zoomIn');
      menudivs.style.setProperty('--animate-duration', '1s');
      canvas.classList.toggle("active");
      container.style.display = "block";
      menuflag = true;
      arrow.style.opacity = 0.3;
      musicss.style.opacity=0.3;
      musicswaves.style.opacity=0.3
      wait(1000).then(() => {;
       
      menudivs.classList.remove('animate__animated', 'animate__zoomIn');
    
       })
    }
  }
});
escbutton.addEventListener("click", function () {
  menudivs.classList.remove("active");
  canvas.classList.remove("active");
  menuflag = false;
  arrow.style.opacity = 1;
  musicss.style.opacity=1;
  musicswaves.style.opacity=1;
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const toolbarImg = new Image();
toolbarImg.src = "toolsbarnew.png";
const toolbarImgWidth = 180;
const toolbarImgHeight = canvas.height;
const toolbarImgposX = canvas.width - toolbarImgWidth; 
const toolbarImgposY = 0;
toolbarImg.onload = function () {
  c.drawImage(toolbarImg, toolbarImgposX, toolbarImgposY, toolbarImgWidth, toolbarImgHeight);
};

function showHintMessage() {
  const hint_msg = document.getElementById("hint_msg"); 
   hint_msg.style.display = "block";
  canvas.classList.toggle("active");
  hint_msg.classList.add('animate__animated', 'animate__zoomIn');
  hint_msg.style.setProperty('--animate-duration', '1s');
  wait(1000).then(() => {;
    hint_msg.classList.remove('animate__animated', 'animate__zoomIn');

   })

}
function hideHintMessage() {
  const hint_msg = document.getElementById("hint_msg");
  hint_msg.style.display = "none";
  
  canvas.classList.remove("active");
}
let hint_button = document.getElementById('hint_button');
let hint_board = document.getElementById('hint_board');
let ishelpimgvisible = false;
hint_button.onclick = function() {
  ishelpimgvisible = !ishelpimgvisible;
  if (ishelpimgvisible) {
    if(menuflag === false){
      hint_board.style.display = 'flex';
      hint_board.classList.add('animate__animated', 'animate__zoomIn');
      hint_board.style.setProperty('--animate-duration', '1s');
      showHintMessage();
      wait(1000).then(() => {;
      hint_board.classList.remove('animate__animated', 'animate__zoomIn');
  
       })
       
      hintflag = true;
      arrow.style.opacity = 0.3;
      musicss.style.opacity=0.3;
      musicswaves.style.opacity=0.3
    }
  }else if(menuflag === false){
    hint_board.style.display = 'none';
    hideHintMessage();
    hintflag = false;
    arrow.style.opacity = 1;
    musicss.style.opacity=1;
    musicswaves.style.opacity=1;
};
}
function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
arrow.addEventListener("click", function () {
  window.location.replace("indi.html");
});
let menuexit=document.getElementById("menuexit")
let babymenu=document.getElementById("menu4")
let babymenu1=document.getElementById("menu1")
let babymenu2=document.getElementById("menu2")
let babymenu3=document.getElementById("menu3")
menuexit.addEventListener("click", function(){

  babymenu1.style.display="none";
  babymenu2.style.display="none";
  babymenu3.style.display="none";
  menudivs.style.backgroundImage= "url(menublood.png)"
  wait(2000).then(()=>{
    menudivs.style.backgroundImage= "url(menu.png)"
    
    babymenu1.style.display="flex";
    babymenu2.style.display="block";
    babymenu3.style.display="flex";
  
  })

})
let restarto=document.getElementById("restarto")
restarto.addEventListener("click", function(){
  window.location.replace("intro.html");
})
const stars = [];
canvasa.width=window.innerWidth-toolbarImgWidth 
canvasa.height=200
for (let i = 0; i <80; i++) {
    stars.push({
        x: Math.random() * canvasa.width,
        y: Math.random() * canvasa.height,
        opacity: Math.random(),
    });
  }
let frames=0;
function drawStars() { 
  window.requestAnimationFrame(drawStars);
    ctx.clearRect(0, 0, canvasa.width, canvasa.height);
         stars.forEach(star => {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, ' + star.opacity + ')';
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 1.5);
        ctx.fill();
        if(frames%100===0){
        star.opacity += 0.1;
        if (star.opacity > 1) {
            star.opacity = 0;
        }
      }
    });
  frames++;
}
drawStars();
