const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
let menudivs = document.getElementById("menudivs");
let settingbutton = document.getElementById("settingbutton");
let arrow = document.getElementById("arrow");
let checkmenu = document.getElementById("checkmenu");
let body = document.querySelector("body");
let escbutton = document.getElementById("escbutton");
let container=document.getElementById("container")
const soundEffect = document.getElementById('soundEffect'); 
const locksy= document.getElementById('locksy'); 
const enter=document.getElementById("enter")
const key22=document.getElementById("key22")
function changecolor(){
  enter.style.color="white"
  key22.style.color="white"
  wait(900).then(() => {
    enter.style.color="black"
    key22.style.color="black"
  });  
  setTimeout(changecolor, 1300);
}
window.onload=changecolor()
function playSoundEffect() {
  soundEffect.currentTime = 0; 
  soundEffect.play();
}
function playlocksy() {
  locksy.currentTime = 0; 
  locksy.play();
}

let hintflag = false;
let menuflag = false;

function lighto(num){
  box.style.opacity = num;
  lock.style.opacity = num;
  arrow.style.opacity = num;
  unlocked.style.opacity = num;
  key.style.opacity = num;
  arrow.style.opacity = num;
  musicss.style.opacity=num;
  musicswaves.style.opacity=num;
}
function idkshusamiha(check, real){
  menuflag = check;
  hintflag = check;
  lock.style.opacity = real;
  arrow.style.opacity = real; 
}
let sumis=document.getElementById("sumis")
let musicss=document.getElementById("musicss")
let musicswaves=document.getElementById("musicswaves")
let musicssflag=false;
        musicss.addEventListener("click", function(){
          sumis.play();
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
            sumis.pause();
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
      lighto(0.3);
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

  lighto(1);
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

const hint_button = document.getElementById('hint_button');
const hint_board = document.getElementById('hint_board');
let ishelpimgvisible = false;
hint_button.onclick = function() {
  ishelpimgvisible = !ishelpimgvisible;
  if (ishelpimgvisible) {
    if(menuflag === false){

      hint_board.style.display = 'flex';
      hint_board.classList.add('animate__animated', 'animate__zoomIn');
      hint_board.style.setProperty('--animate-duration', '1s');
      showHintMessage();
      hintflag = true;
      lighto(0.3);
      wait(1000).then(() => {;
        hint_board.classList.remove('animate__animated', 'animate__zoomIn');
    
         })
    }
  }else{
    if(menuflag === false){
      hint_board.style.display = 'none';
      hideHintMessage();
      hintflag = false;
      lighto(1);
    }
  }
};
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

const textInput = document.getElementById('textInput');
let textmsg=document.getElementById("lol")
let hh=document.getElementById("hh")
let hhh=document.getElementById("hhh")
let box=document.getElementById("box1")
let key=document.getElementById("key")
let idnb=document.getElementsByClassName("nbInput")
let submit=document.getElementById("submit")
var locked = document.getElementById("box2");
var unlocked = document.getElementById("box3");
let lockbutton=document.getElementById("lockbutton")
unlocked.style.display = "none";
key.style.display = "none";
textInput.addEventListener("keypress", function(event){
  const inputValue = textInput.value.trim();
  if(event.key === "Enter"){
    if(inputValue==='abdallah' || inputValue==='ABDALLAH'|| inputValue==='Abdallah'){
      textmsg.style.color="#fff";
      textmsg.textContent="Your id is: 6172";
      hh.style.display = "none";
      idflag = true;
    }
    else{
      textmsg.textContent="mm try again"
      textInput.value=""
    }
  }
})
locked.style.display = "none";
hhh.style.display = "none";
function Box() {
  if (locked.style.display === "none") {
    if(!menuflag && !hintflag){
      locked.style.display = "block";
      hhh.style.display = "flex";
      canvas.classList.toggle("active");
      idkshusamiha(true, 0.3);
   
    }
  } else {
    locked.style.display = "none";
    hhh.style.display = "none";
    canvas.classList.remove("active");
    idkshusamiha(false, 1);
  }
}
function onlyonenumberisallowed(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
  if (input.value.length > 1) {
    input.value = input.value.charAt(0);
  }
}
function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function checkifcorrect(){
  if(idnb[0].value=='6' && idnb[1].value==='1' && idnb[2].value==='7' && idnb[3].value==='2' ){
    locked.style.display = "none";
    box.style.display = "none";
    canvas.classList.remove("active");
    playSoundEffect()
    hhh.style.display = "none";
    unlocked.style.display = "block";
    key.style.display = "block";
    idkshusamiha(false, 1);
  }
  else{
    for (var i = 0; i <idnb.length; i++){
      idnb[i].value=''
    }
  }
}
for (var i = 0; i <idnb.length; i++) {
  idnb[i].oninput=function(){
    onlyonenumberisallowed(this)
  } 
}
submit.addEventListener("click", function () { 
  checkifcorrect()
  submit.style.backgroundColor='red';
  wait(300).then(() => {
    submit.style.backgroundColor='green';
  });
});

let textbubble=document.getElementById("textbubble")
lockbutton.addEventListener("click", function () {
  
  console.log(menuflag);
  if(!menuflag && !hintflag){
    textbubble.style.display='block';
    textbubble.textContent="Locked!"
    playlocksy()
    wait(1000).then(() => {
      textbubble.style.display='none';
      textbubble.textContent=""
    });
  }
});

const topPositions = [
  {top : '100px', left : '96%', used : false}, {top : '200px', left : '96%', used : false,},
  {top : '300px', left : '96%', used : false,}, {top : '400px', left : '96%', used : false,},
  {top : '500px', left : '96%', used : false,},
];

class Tools {
  constructor(element, copyelement, animation, animationDuration, secclickelement, somefunction) {
    this.element = element;
    this.copyelement = copyelement;
    this.animation = animation;
    this.animationDuration = animationDuration;
    this.secclickelement = secclickelement;
    this.somefunction = somefunction;
    this.counter = 0;
    this.isActive = false;
    this.element.addEventListener('click', () => {
      this.element.classList.add(this.animation);
      setTimeout(() => {
        this.element.style.display = 'none';
        this.element.classList.remove(this.animation);
                 
        while(this.counter < topPositions.length){
          if(topPositions[this.counter].used === false){
            this.copyelement.style.top = topPositions[this.counter].top;
            this.copyelement.style.left = topPositions[this.counter].left;
            topPositions[this.counter].used = true;
            console.log(topPositions[this.counter].used);
            break;
          }
          this.counter++;
        }
        this.copyelement.style.display = 'flex';
      }, this.animationDuration); 
    });
  }
  doubleclicklistener(){
    this.copyelement.addEventListener('click', () => {
      this.isActive = !this.isActive;
      this.copyelement.classList.toggle("active");
      this.secclickelement.addEventListener('click', () => {
        if (this.isActive) {
          console.log("Secondary element clicked");
          this.somefunction();
          topPositions[this.counter].used = false;
        }
      });
    });
  }
}
let copykey=document.getElementById("copykey");
let lock=document.getElementById("lock");
let animatedKey = new Tools(key, copykey, 'tools_animation', 500, lock, doo);
animatedKey.doubleclicklistener();

function doo(){
  copykey.style.display = 'none';
  textbubble.textContent="Unlocked";
  wait(1000).then(() => {
    window.location.replace("ur-in.html");
  });  
}
arrow.addEventListener("click", function () {
  if(!menuflag && !hintflag){
    window.location.replace("intro.html");
  }
});

let idflag = false;
let hint_msg = document.getElementById("hint_msg");
let hint_msg1 = document.getElementById("hint_msg1");
function showHintMessage(){
  if(!idflag){
    hint_msg.style.display = "block";
    hint_msg.classList.add('animate__animated', 'animate__zoomIn');
  hint_msg.style.setProperty('--animate-duration', '1s');
  wait(1000).then(() => {;
    hint_msg.classList.remove('animate__animated', 'animate__zoomIn');
   })

  }
  else{
    hint_msg1.style.display = "block";
    hint_msg.classList.add('animate__animated', 'animate__zoomIn');
  hint_msg.style.setProperty('--animate-duration', '1s');
  wait(1000).then(() => {;
    hint_msg.classList.remove('animate__animated', 'animate__zoomIn');

   })

  }
  canvas.classList.toggle("active");
}
function hideHintMessage(){
  if(!idflag){
    hint_msg.style.display = "none";
  }
  else{
    hint_msg1.style.display = "none";
  }
  canvas.classList.remove("active");
}
// new BugController({'minBugs':10, 'maxBugs':50, 'mouseOver':'die'});
// new SpiderController({'minDelay':0,'maxDelay':0,'minBugs':1, 'maxBugs':1, 'mouseOver':'nothing'});