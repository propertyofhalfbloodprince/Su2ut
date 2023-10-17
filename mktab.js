const canvasa = document.getElementById("canvas");
const ctx = canvasa.getContext("2d");
let menudivs = document.getElementById("menudivs");
let settingbutton = document.getElementById("settingbutton");
let checkmenu = document.getElementById("checkmenu");
let body = document.querySelector("body");
let escbutton = document.getElementById("escbutton");
let container=document.getElementById("container")
const enter=document.getElementById("enter")
let notes=document.getElementById("notes")
let hintflag = false;
let menuflag = false;
let musicss=document.getElementById("musicss")
let makdus=document.getElementById("makdus")
let musicswaves=document.getElementById("musicswaves")
let musicssflag=false;
function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
        musicss.addEventListener("click", function(){
          makdus.play();
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
            makdus.pause();
            musicswaves.classList.add('animate__animated', 'animate__tada');
            musicswaves.style.setProperty('--animate-duration', '1.5s');
           wait(1300).then(() => {;
           musicswaves.style.display="none"
           musicssflag=false
          })
  
        }
       
      })
      function lighto(num){
        computer.style.opacity=num;
        laptop.style.opacity=num;
        notes.style.opacity=num;
        tablet.style.opacity=num;
        musicss.style.opacity=num;
        musicswaves.style.opacity=num;
        sus.style.opacity=num;
        kalakish.style.opacity=num;
        grades.style.opacity=num;
      }
settingbutton.addEventListener("click", function () {
  if(!menuflag){
    if(!hintflag){
      menudivs.classList.toggle("active");
      menudivs.classList.add('animate__animated', 'animate__zoomIn');
      menudivs.style.setProperty('--animate-duration', '1s');
      canvasa.classList.toggle("active");
      container.style.display = "block";
      menuflag = true;
     lighto(0.3)
      wait(1000).then(() => {;
       
      menudivs.classList.remove('animate__animated', 'animate__zoomIn');
    
       })
    }
  }
});
escbutton.addEventListener("click", function () {
  menudivs.classList.remove("active");
  canvasa.classList.remove("active");
  lighto(1)
  menuflag = false;
});

canvasa.width = window.innerWidth;
canvasa.height = window.innerHeight;
const toolbarImg = new Image();
toolbarImg.src = "toolsbarnew.png";
const toolbarImgWidth = 180;
const toolbarImgHeight = canvasa.height;
const toolbarImgposX = canvasa.width - toolbarImgWidth; 
const toolbarImgposY = 0;
toolbarImg.onload = function () {
  ctx.drawImage(toolbarImg, toolbarImgposX, toolbarImgposY, toolbarImgWidth, toolbarImgHeight);
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
      lighto(1)
      hintflag = false;
    }
  }
};

let menuexit=document.getElementById("menuexit")
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
notes.addEventListener("click",function(){
  notes.classList.toggle("active");
  canvasa.classList.toggle("active");
})
let laptop=document.getElementById("laptop");
let game1=document.getElementById("game1");
let exitb=document.getElementById("exitb");
let clownn=document.getElementById("clown");
game1.style.display="none";
exitb.addEventListener("click", function () {
    game1.style.display = "none";
    canvasa.classList.remove("active");
      clownn.pause();
      makdus.play();
  });
function sa2utgame() {
    if (game1.style.display === "none") {
      if(!menuflag && !hintflag){
        game1.style.display = "block";
        canvasa.classList.toggle("active");
        clownn.play();
        makdus.pause();
      }
    }
     else{
      game1.style.display = "none";
      canvasa.classList.remove("active");
    }
  }
 

  const emojis = {
    '1': '💞',
    '2': '🥰',
    '3': '🍀',
    '4': '☀️',
    '5': '👍',
    '6': '😃',
    '7': '👋',
    '8': '🙋🏻‍♀️',
    '9': '😊',
  };
  
  let compscreen = document.getElementById('compscreen');
  let containeR = document.getElementById('containeR');
  let chatcontainer = document.getElementById('containerR');
  let inputs = document.querySelectorAll('.inpuT');
  let optioN1 = document.getElementById('optioN1');
  let optioN2 = document.getElementById('optioN2');
  let optioN3 = document.getElementById('optioN3');
  let playerchat = document.getElementById('playerchat');
  let mychat = document.getElementById('mychat');
  let choosinG = document.getElementById('choosinG');
  let codeiscorrect = false;
  let iscompscreenimgvisible = false;
  let hint_msg1 = document.getElementById('hint_msg1');
  let hint_msg = document.getElementById("hint_msg");
  let kakflag = false;
  computer.addEventListener('click', function(event){
      if(!iscompscreenimgvisible){
        if(!menuflag && !hintflag){
          compscreen.style.display = 'flex';
          iscompscreenimgvisible = true;
          if(codeiscorrect){
            containeR.style.display = 'none';
            chatcontainer.style.display = 'flex';
            kakflag = true;
          }else{
            containeR.style.display = 'flex';
          }
          menuflag = true;
          hintflag = true;
        }
      }else{
        compscreen.style.display = 'none';
        iscompscreenimgvisible = false;
        containeR.style.display = 'none';
        chatcontainer.style.display = 'none';
        menuflag = false;
        hintflag = false;
      }
    
  })

  function showHintMessage() {
    if(!kakflag){
      hint_msg.style.display = "block";
    }
    else{
      hint_msg1.style.display = "block";
    }
    canvasa.classList.toggle("active");
    hint_msg.classList.add('animate__animated', 'animate__zoomIn');
    hint_msg.style.setProperty('--animate-duration', '1s');
    wait(1000).then(() => {;
      hint_msg.classList.remove('animate__animated', 'animate__zoomIn');
  
     })
  }
  function hideHintMessage() {
    if(!kakflag){
      hint_msg.style.display = "none";
    }
    else{
      hint_msg1.style.display = "none";
    }
    canvasa.classList.remove("active");
  }
  let sigma=document.getElementById("sigma")
  inputs.forEach(input=>{
    input.addEventListener('input', function(event){
      let inputvalue = event.target.value;
      let emoji = emojis[inputvalue] || '';
      event.target.value = emoji;
      if (all_inputs_are_filled()) {
        unfocuslastinput();
        checkinputs();
      }
    });
  
    input.addEventListener('click', function(event){
      let inputvalue = event.target.value;
      event.target.setSelectionRange(inputvalue.length, inputvalue.length);
    });
  
    input.addEventListener('keydown', function(event, indeX){
      indeX = getfocusedinputindex();
      if(event.key === 'ArrowRight'){
        event.preventDefault();
        if(indeX < inputs.length - 1){
          inputs[indeX+1].focus();
          indeX++;
        }else{
          indeX = 0;
          inputs[0].focus();
        }
      }
      if(event.key === 'ArrowLeft'){
        event.preventDefault();
        if(indeX > 0){
          inputs[indeX-1].focus();
          indeX--;
        }else{
          indeX = inputs.length - 1;
          inputs[inputs.length - 1].focus();
        }
      }
    });
  });
  
  function all_inputs_are_filled() {
    let allfilled = true;
    for(let i=0; i<inputs.length; i++){
      if(inputs[i].value === ''){
        allfilled = false;
        break;
      }
    }
    return allfilled;
  }
  
  function unfocuslastinput() {
    document.activeElement.blur();
  }
  
  function getfocusedinputindex() {
    for (let i = 0; i < inputs.length; i++) {
      if (document.activeElement === inputs[i]) 
        return i;
    }
    return -1; 
  }
  
  function bordercolorchange(color){
    for(let i=0; i<inputs.length; i++){
      inputs[i].style.borderColor = color;
    }
  }
  
  function checkinputs(){
    setTimeout(()=>{
      if(inputs[0].value === emojis['2'] && inputs[1].value === emojis['4'] && inputs[2].value === emojis['6']  
      &&inputs[3].value === emojis['1'] &&inputs[4].value === emojis['9'] ){
        bordercolorchange("green");
        codeiscorrect = true;
        setTimeout(()=>{
          containeR.style.display = 'none';
          chatcontainer.style.display = 'flex';
          kakflag = true;
        }, 1500);
      }else{
        bordercolorchange("red");
        setTimeout(()=>{
          bordercolorchange("gold");
        }, 1500);
      }
    }, 300);
  }
  let windowsy=document.getElementById("window")
  let leftonseenflag=false
  let whatsapp=document.getElementById("whatsapp")
  let online=document.getElementById("online")
  let flagoption1=false;
  let chatbox=document.getElementById("chatbox")
  let seen=document.getElementById("seen")
  let playerchat2=document.getElementById("playerchat2")
let sendthing=document.getElementById("sendthing")
whatsapp.addEventListener('click',()=>{
  chatbox.style.display='block'
  if(flagoption1){
    leftonseenflag=true
  }
})
seen.addEventListener('click',()=>{
  chatbox.style.display = 'none';
if(flagoption1){
  playerchat2.style.display='flex'
  choosinG.style.display='none'
  sendthing.style.display='none'
  sigma.style.display='block'
} if(leftonseenflag){
  windowsy.style.display='block'

}
})

  optioN1.addEventListener('click', ()=>{  if(!flagoption1){
    mychat.style.display = 'flex';
    online.textContent="typing..."
    setTimeout(()=>{
      online.textContent="online"
      playerchat.style.display = 'flex';
      optioN1.textContent="yes"
    optioN2.textContent="no"
    optioN3.textContent="no idea yet"
    flagoption1=true;
    },2000);
  }
  })
  let tablet=document.getElementById("tablet")
  tablet.addEventListener('click',()=>{
    bigdiv.style.display='inline-block'
    canvasa.classList.toggle("active");
  
  })
 
  class Tools {
    constructor(element,copyelement, animation, animationDuration) {
      this.element = element;
      this.animation = animation;
      this.animationDuration = animationDuration;
      this.copyelement=copyelement
      this.element.addEventListener('click', () => {
        this.element.classList.add(this.animation);
        setTimeout(() => {
          this.element.style.display = 'none';
          this.copyelement.style.display='block';
          this.element.classList.remove(this.animation);
      });
      })
  }
}
let shelf= document.getElementById("shelfs")
let copyepsilon=document.getElementById("copyepsilon")
let copysigma=document.getElementById("copysigma")
let copygamma=document.getElementById("copygamma")
const divs = document.getElementsByClassName('copy'); 
let animatedepsilon = new Tools(epsilon, copyepsilon, 'tools_animation', 500);
let animatedsigma = new Tools(sigma, copysigma,'tools_animation', 500);
let animatedgamma = new Tools(gamma,copygamma, 'tools_animation', 500);

function checkorderofbooks(){
  if(shelf.childElementCount ===3){
    if(divs[0].id==="copygamma" && divs[1].id==="copysigma" && divs[2].id==="copyepsilon"){
      console.log("yallabarra")
      window.location.replace("pacmanoutro.html");
    }
    else{
      console.log("wrong")
    }
  }
}

  function dropItem() {
    var boundsBefore, boundsAfter;
    if (this.hitTest('.shelf')){
        boundsBefore = this.target.getBoundingClientRect();
        $(this.target).appendTo('.shelf');
        boundsAfter = this.target.getBoundingClientRect();
        TweenMax.fromTo(this.target, 0.3, {
          x:"+=" + (boundsBefore.left - boundsAfter.left), 
          y:"+=" + (boundsBefore.top - boundsAfter.top)
        }, {
          x:0,
          y:0
        });
        checkorderofbooks()
    } else {
        TweenMax.to(this.target,0.5,{x:0,y:0});
    }
  }
  
  Draggable.create("#copygamma",{
    onRelease:dropItem,
    
  });
  Draggable.create("#copysigma",{
    onRelease:dropItem,

  });
  Draggable.create("#copyepsilon",{
    onRelease:dropItem,
  });
  let tfi=document.getElementById("tfi");
  let grades=document.getElementById("grades");
  tfi.style.display = "none";
  let kalakish=document.getElementById("kalakish");
  kalakish.addEventListener("click", function () {
    if(tfi.style.display==="none"){
      tfi.style.display = "block";
      grades.style.display = "none";
      canvasa.classList.toggle("active");
      lighto(0.3)
    }
    else{
      tfi.style.display = "none";
      grades.style.display = "block";
      canvasa.classList.remove("active");
      lighto(1)
    }
  });
  let susubig=document.getElementById("susubig");
  let sus=document.getElementById("sus");
  susubig.style.display = "none";
  sus.addEventListener("click", function () {
    if(susubig.style.display==="none"){
      susubig.style.display = "block";
      canvasa.classList.toggle("active");
      lighto(0.3)
    }
    else{
      susubig.style.display = "none";
      canvasa.classList.remove("active");
      lighto(1)
    }
  });
  

