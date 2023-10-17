
var flag1=0;
var org=0;
var flag2=0;
let newz=document.getElementById("newz");
let clown=document.getElementById("clown");
let fly=document.getElementById("fly");
let fly2=document.getElementById("fly2");
let fly3=document.getElementById("fly3");
let alam= document.getElementById("alam");
let mhaye=document.getElementById("mhaye");
let game= document.getElementById("game");
let hidden = game.getAttribute("hidden");
let svg = document.querySelector("svg");
const play = document.querySelector(".play");
let arrows = document.querySelector(".arrows");
const war = document.getElementById("war");
const wmsg = document.getElementById("wmsg");
const warning = document.getElementById("warning");
const arg = document.getElementById("arg");
const playmenu = document.querySelector(".playmenu");
var roundmsg=document.getElementById("roundmsg");
let restart= document.getElementById("restart");
function rmsg(){
  if(r==0){
    roundmsg.textContent='Hint:"btaaref m3 meen bdk truh thke? m3 li allak enu lhayet sahle."';
  }
  else if(r==1){
    roundmsg.textContent='Hint: 15 pt bonus sada2a for being a good kid<3';
  }
  else if(r==2){
    roundmsg.textContent='Hint: Grades are always fair and on point ';
  }
  else if(r==3){
    roundmsg.textContent='Hint:"mtl ma shyfeen shabeb ma fi ashal mn hek"';
  }
  else if(r==4){
    roundmsg.textContent='Hint:💖araf💖';
  }
}
function playclown(){
  makdus.pause();
  clown.play();
}
restart.addEventListener("click", () => {
s=0;
score.textContent="score : "+s;
while (arrows.firstChild) {
  arrows.removeChild(arrows.firstChild);
}
});
play.addEventListener("click", () => {
  play.classList.add('animate__animated', 'animate__zoomOutDown');
  play.style.setProperty('--animate-duration', '1.5s');
  wait(500).then(() => {
    playmenu.classList.add('animate__animated', 'animate__flipOutX');
    playmenu.style.setProperty('--animate-duration', '1.2s');
    wait(1200).then(() => {
      flag1=1;
      playmenu.style.display="none";
      showwarning();
    });
  });
});
function showwarning(){
  if(flag1==1){
    warning.style.display="block";
    warning.classList.add('animate__animated', 'animate__shakeX');
    warning.style.setProperty('--animate-duration', '1s');
    wait(500).then(() => {
      war.style.display="block";
      war.classList.add('animate__animated', 'animate__tada');
      war.style.setProperty('--animate-duration', '1.5s');
      wmsg.style.display="block";
      wmsg.classList.add('animate__animated', 'animate__zoomIn');
      wmsg.style.setProperty('--animate-duration', '1s');
      wait(8000).then(() => {
        warning.classList.add('animate__animated', 'animate__zoomOut');
        warning.style.setProperty('--animate-duration', '1.5s');
        war.classList.add('animate__animated', 'animate__zoomOut');
        war.style.setProperty('--animate-duration', '1.3s');
        wmsg.classList.add('animate__animated', 'animate__zoomOut');
        wmsg.style.setProperty('--animate-duration', '1.3s');
        game.removeAttribute("visibility");
        newz.style.display="block";
        rmsg();
        arg.style.display="block";
        aim({
          clientX: 320,
          clientY: 300,
        });
        svg.addEventListener("mousedown", draw);
      });
    });
    }
    else{
    war.style.display="none";
    warning.style.display="none";
    }
}
showwarning();
let score=document.getElementById("score");
let s=0;
score.textContent="score : "+s;
let round=document.getElementById("round");
let r=0;
round.textContent="round : "+(r+1); 
let cursor = svg.createSVGPoint();
let lol = document.getElementById("lol");
let randomAngle = 0;
let target = { 
  x: 785,
  y: 225.5,
};
let lineSegment = {
  x1: 770,
  y1: 285,
  x2: 802,
  y2: 170,
};
let pivot = {
  x: 150,
  y: 250,
};

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function draw(e) {  
  randomAngle = Math.random() * Math.PI *0.15 ;
  TweenMax.to(".arrow-angle use", 0.5, {
    opacity: 1,
  });
  svg.addEventListener("mousemove", aim);
  svg.addEventListener("mouseup", loose);
  aim(e);
}

function aim(e) {
  let point = getMouseSVG(e);
  point.x = Math.min(point.x, pivot.x - 7);
  point.y = Math.max(point.y, pivot.y + 7);
  let dx = point.x - pivot.x;
  let dy = point.y - pivot.y;

  let angle = Math.atan2(dy, dx) + randomAngle;
  let bowAngle = angle - Math.PI;
  let distance = Math.min(Math.sqrt(dx * dx + dy * dy), 50);
  let scale = Math.min(Math.max(distance / 30, 1), 2);

  TweenMax.to("#bow", 0.3, {
    scaleX: scale,
    rotation: bowAngle + "rad",
    transformOrigin: "right center",
  });

  let arrowX = Math.min(pivot.x - (1 / scale) * distance, 88);
  TweenMax.to(".arrow-angle", 0.3, {
    rotation: bowAngle + "rad",
    svgOrigin: "150 250",
  });

  TweenMax.to(".arrow-angle use", 0.3, {
    x: -distance,
  });

  TweenMax.to("#bow polyline", 0.3, {
    attr: {
      points:
        "88,200 " +
        Math.min(pivot.x -50 - (1 / scale) * distance, 88) +
        ",250 88,300",
    },
  });

  let radius = distance * 9;
  let offset = {
    x: Math.cos(bowAngle) * radius,
    y: Math.sin(bowAngle) * radius,
  };
  let arcWidth = offset.x * 3;
  TweenMax.to("#arc", 0.3, {
    attr: {
      d:
        "M150,250c" +
        offset.x +
        "," +
        offset.y +
        "," +
        (arcWidth - offset.x) +
        "," +
        (offset.y + 50) +
        "," +
        arcWidth +
        ",50",
    },
    autoAlpha: distance / 60,
  });
}

function loose() {
  svg.removeEventListener("mousemove", aim);
  svg.removeEventListener("mouseup", loose);

  TweenMax.to("#bow", 0.4, {
    scaleX: 1,
    transformOrigin: "right center",
    ease: Elastic.easeOut,
  });

  TweenMax.to("#bow polyline", 0.4, {
    attr: {
      points: "88,200 88,250 88,300",
    },
    ease: Elastic.easeOut,
  });

  let newArrow = document.createElementNS("http://www.w3.org/2000/svg", "use");
  newArrow.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#arrow");
  arrows.appendChild(newArrow);
  let path = MorphSVGPlugin.pathDataToBezier("#arc");
  TweenMax.to([newArrow], 0.5, {
    force3D: true,
    bezier: {
      type: "cubic",
      values: path,
      autoRotate: ["x", "y", "rotation"],
    },
    onUpdate: hitTest,
    onUpdateParams: ["{self}"],
    onComplete: onMiss,
    ease: Linear.easeNone,
  });

  TweenMax.to("#arc", 0.3, {
    opacity: 0,
  });

  TweenMax.set(".arrow-angle use", {
    opacity: 0,
  });
}
function hitTest(tween) {
  let arrow = tween.target[0];
  let transform = arrow._gsTransform;
  let radians = (transform.rotation * Math.PI) / 180;
  let arrowSegment = {
    x1: transform.x,
    y1: transform.y,
    x2: Math.cos(radians) * 60 + transform.x,
    y2: Math.sin(radians) * 60 + transform.y,
  };
  let intersection = getIntersection(arrowSegment, lineSegment);
  let tops=arrowSegment.x2+1;
  let downs=arrowSegment.y2+1;
  if (intersection.segment1 && intersection.segment2) {
    tween.pause();
    let dx = tops - target.x;
    let dy = downs - target.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    console.log(distance);
    if(org==0){
    if (distance > 50) {
      s=s+50;
      score.textContent="score : "+s;
    }
    else if(distance<50 && distance>40){
      s=s+20;
      score.textContent="score : "+s;
    }
    else if(distance<40 && distance>30){
      s=s+10;
      score.textContent="score : "+s;
    }
    else if(distance<30 && distance>20){
      s=s+5;
      score.textContent="score : "+s;
    }
    else if(distance<20){
      s=s+1;
      score.textContent="score : "+s;
    }
  }
  else if(org==1){
    if (distance > 50) {
      s=s-50;
      score.textContent="score : "+s;
    }
    else if(distance<50 && distance>40){
      s=s-20;
      score.textContent="score : "+s;
    }
    else if(distance<40 && distance>30){
      s=s-10;
      score.textContent="score : "+s;
    }
    else if(distance<30 && distance>20){
      s=s-5;
      score.textContent="score : "+s;
    }
    else if(distance<20){
      s=s-1;
      score.textContent="score : "+s;
    }
  }
    rou();
  }
}
function lula(nula){
  lol.textContent=nula;
  lol.style.display = "block";
  wait(600).then(() => {
    lol.style.display = "none";
  });
}
function onMiss() {
  lula("sa2ut");
}


function getMouseSVG(e) {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
  return cursor.matrixTransform(svg.getScreenCTM().inverse());
}

function getIntersection(segment1, segment2) {
  let dx1 = segment1.x2 - segment1.x1;
  let dy1 = segment1.y2 - segment1.y1;
  let dx2 = segment2.x2 - segment2.x1;
  let dy2 = segment2.y2 - segment2.y1;
  let cx = segment1.x1 - segment2.x1;
  let cy = segment1.y1 - segment2.y1;
  let denominator = dy2 * dx1 - dx2 * dy1;
  if (denominator == 0) {
    return null;
  }
  let ua = (dx2 * cy - dy2 * cx) / denominator;
  let ub = (dx1 * cy - dy1 * cx) / denominator;
  return {
    x: segment1.x1 + ua * dx1,
    y: segment1.y1 + ua * dy1,
    segment1: ua >= 0 && ua <= 1,
    segment2: ub >= 0 && ub <= 1,
  };
}
let epsilon=document.getElementById("epsilon")
epsilon.style.display="none";
function rou(){
  if(s==86 && r==0){
    s=15;
    r=r+1;
    wait(500).then(() => {
      rmsg();
    round.textContent="round : "+(r+1);
    score.textContent="score : "+s;
    while (arrows.firstChild) {
      arrows.removeChild(arrows.firstChild);
    }
    });
}
else if(s==75 && r==1){
  s=0;
  r=r+1;
  wait(500).then(() => {
  org=1;
  rmsg();
  round.textContent="round : "+(r+1);
  score.textContent="score : "+s;
  while (arrows.firstChild) {
    arrows.removeChild(arrows.firstChild);
  }
  });
}
else if(s==-60 && r==2){
  roundmsg.textContent='Hint:"Raise it is"';
  org=0;
  s=0;
  r=r+1;
  wait(2000).then(() => {
    rmsg();
  round.textContent="round : "+(r+1);
  score.textContent="score : "+s;
  while (arrows.firstChild) {
    arrows.removeChild(arrows.firstChild);
  }
  });
}
else if(s==73 && r==3){
  s=0;
  r=r+1;
  wait(500).then(() => {
    rmsg();
  round.textContent="round : "+(r+1);
  score.textContent="score : "+s;
  alam.style.stroke="#000";
  fly.style.display="block";
  fly2.style.display="block";
  fly3.style.display="block";
  fly.classList.add('animate__animated', 'animate__wobble');
  fly.style.setProperty('--animate-duration', '7s');
  fly.style.setProperty('--animate-repeat', '4');
  fly2.classList.add('animate__animated', 'animate__wobble');
  fly2.style.setProperty('--animate-duration', '5s');
  fly2.style.setProperty('--animate-repeat', '6');
  fly3.classList.add('animate__animated', 'animate__wobble');
  fly3.style.setProperty('--animate-duration', '8s');
  fly3.style.setProperty('--animate-repeat', '3');
  while (arrows.firstChild) {
    arrows.removeChild(arrows.firstChild);
  }
  });
}
else if(s==55 && r==4){
  wait(700).then(() => {
    fly.style.display="none";
    fly2.style.display="none";
    fly3.style.display="none";
    rmsg();
  round.textContent="round : "+(r+1);
  score.textContent="score : "+s;
  while (arrows.firstChild) {
    arrows.removeChild(arrows.firstChild);
  }
  svg.style.visibility="hidden";
  arg.style.display="none";
  newz.style.display="none";
  lol.textContent="Ig we have a winner.. But anw, don't get ur hopes up, a sa2ut remains a sa2ut.";
  lol.style.left="35%";
  lol.style.display = "block";
  wait(7000).then(() => {
    lol.style.display = "none";
    clown.pause();
    epsilon.style.display="block";
  });
  });
}
}
