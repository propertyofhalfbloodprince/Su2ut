let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let scoretag = document.getElementById("scoretag");
let score = 0;
let audio_start = document.getElementById("Audio_start");
let audio_end = document.getElementById("Audio_death");
let audio_eat = document.getElementById("Audio_eat");
let audioPlayed = false;
let ready = document.getElementById("ready");
let win = document.getElementById("win");
let gameover = document.getElementById("Gameover");
let scorety=document.getElementById("scorety")
canvas.width = 425;
canvas.height = 425; 
function startgame(){
  
  scorety.style.display='block'
  ready.style.display = 'flex';
  setTimeout(function() {
   
    ready.style.display = 'none';
  
  }, 900);

}
let reset = document.getElementById("Reset");
let counter = document.getElementById("counter");
let second = document.getElementById("second");
let count = 5;

function updateCounter() {
  counter.textContent = count;
  count--;
  if(count === 0 ){
    second.textContent = " second";
  }
  if (count > 0) {
    setTimeout(updateCounter, 1000);
  }
}


class Boundary{
    static width = 25;
    static height = 25;
    constructor({position, image}){
        this.position = position;
        this.width = Boundary.width;
        this.height = Boundary.height;
        this.image = image;
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y, Boundary.width , Boundary.height);
    }
}

class Player{
  static speed = 1.7; 
  constructor({position, velocity}){
    this.position = position;
    this.velocity = velocity;
    this.radius = 10;
    this.radians = 0.75;
    this.openRate = 0.07;
    this.rotation = 0;
  }
  draw(){
    c.save();
    c.translate(this.position.x, this.position.y);
    c.rotate(this.rotation);
    c.translate(-this.position.x, -this.position.y);
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, this.radians, Math.PI * 2 - this.radians);
    c.lineTo(this.position.x, this.position.y);
    c.fillStyle = "yellow";
    c.fill();
    c.closePath();
    c.restore();
  }
  update(){
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if(this.radians < 0 || this.radians > 0.75){
      this.openRate = -this.openRate;
    }
    this.radians += this.openRate;
  }
}

class Ghost{
  static speed = 1;
  constructor({position, velocity, image}){
      this.position = position;
      this.velocity = velocity;
      this.radius = 11;
      this.speed = Ghost.speed;
      this.prevCollisions = [];
      this.image = image;
  }
  draw(){
      c.drawImage(this.image, this.position.x, this.position.y, 24 , 22);
  }
  update(){
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
  }
}1

class Pellet{
  constructor({position}){
      this.position = position;
      this.radius = 1.5;
  }
  draw(){
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = "white";
      c.fill();
      c.closePath();
  }
}

const map = [
    ['1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-',  '-', '-', '2'],
    ['|', ' ', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',  '.', '.', '|'],
    ['|', '.', '^', '.', '[', '7', ']', '.', '^', '.', '1', ']', '.', '[',  '2', '.', '|'],
    ['|', '.', '|', '.', '.', '_', '.', '.', '|', '.', '|', '.', '.', '.',  '|', '.', '|'],
    ['|', '.', '6', ']', '.', '.', '.', '[', '8', '.', '|', '.', '^', '.',  '|', '.', '|'],
    ['|', '.', '|', '.', '.', '^', '.', '.', '|', '.', '|', '.', '|', '.',  '|', '.', '|'],
    ['|', '.', '_', '.', '[', '+', ']', '.', '_', '.', '_', '.', '|', '.',  '_', '.', '|'],
    ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '.', '.', '|', '.',  '.', '.', '|'],
    ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '[', '-', '5', '-',  ']', '.', '|'],
    ['|', '.', '.', '.', '.', '^', '.', ' ', ' ', ' ', ' ', ' ', '.', '.',  '.', '.', '|'],
    ['|', '.', '^', '.', '[', '5', '-', '-', '2', '.', '^', '.', '[', '-',  ']', '.', '|'],
    ['|', '.', '|', '.', '.', '.', '.', '.', '|', '.', '|', '.', '.', '.',  '.', '.', '|'],
    ['|', '.', '4', '-', ']', '.', '^', '.', '_', '.', '|', '.', '[', ']',  '.', '[', '8'],
    ['|', '.', '.', '.', '.', '.', '|', '.', '.', '.', '|', '.', '.', '.',  '.', '.', '|'],
    ['|', '.', '[', '-', '-', '-', '5', '-', ']', '.', '4', '-', '-', '-',  ']', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.',  '.', '.', '|'],
    ['4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-',  '-', '-', '3']
]

const pellets = [];
const boundaries = [];

let player = new Player({
    position: {
        x: Boundary.width + Boundary.width/2,
        y: Boundary.height + Boundary.height/2
    },
    velocity: {
        x: 0,
        y: 0
    }
});

let ghosts = [
  new Ghost({
    position: {x: Boundary.width * 10 , y: Boundary.height },
    velocity: {x: Ghost.speed, y: 0},
    image: createImage('./ghosts/redghost.png'),
  }),
  new Ghost({
    position: {x: Boundary.width * 10 , y: Boundary.height*15 },
    velocity: {x: Ghost.speed, y: 0},
    image: createImage('./ghosts/orangeghost.png'), 
  }),
  new Ghost({
    position: {x: Boundary.width * 9 , y: Boundary.height*9 },
    velocity: {x: Ghost.speed, y: 0},
    image: createImage('./ghosts/greenghost.png'), 
  }),
  new Ghost({
    position: {x: Boundary.width * 12 , y: Boundary.height*9 },
    velocity: {x: Ghost.speed, y: 0},
    image: createImage('./ghosts/blueghost.png'), 
  }),
]

let keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

let lastkey = '';

function createImage(src){
    let image = new Image();
    image.src = src;
    return image;
}

map.forEach((row, i) => {
    row.forEach((symbol, j) => {
      switch (symbol) {
        case '-':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i
              },
              image: createImage('./assets/pipeHorizontal.png')
            })
          )
          break
        case '|':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i
              },
              image: createImage('./assets/pipeVertical.png')
            })
          )
          break
        case '1':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i
              },
              image: createImage('./assets/pipeCorner1.png')
            })
          )
          break
        case '2':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i
              },
              image: createImage('./assets/pipeCorner2.png')
            })
          )
          break
        case '3':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i
              },
              image: createImage('./assets/pipeCorner3.png')
            })
          )
          break
        case '4':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i
              },
              image: createImage('./assets/pipeCorner4.png')
            })
          )
          break
        case 'b':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i
              },
              image: createImage('./assets/block.png')
            })
          )
          break
        case '[':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height
              },
              image: createImage('./assets/capLeft.png')
            })
          )
          break
        case ']':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height
              },
              image: createImage('./assets/capRight.png')
            })
          )
          break
        case '_':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height
              },
              image: createImage('./assets/capBottom.png')
            })
          )
          break
        case '^':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height
              },
              image: createImage('./assets/capTop.png')
            })
          )
          break
        case '+':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height
              },
              image: createImage('./assets/pipeCross.png')
            })
          )
          break
        case '5':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height
              },
              color: 'blue',
              image: createImage('./assets/pipeConnectorTop.png')
            })
          )
          break
        case '6':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height
              },
              color: 'blue',
              image: createImage('./assets/pipeConnectorRight.png')
            })
          )
          break
        case '7':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height
              },
              color: 'blue',
              image: createImage('./assets/pipeConnectorBottom.png')
            })
          )
          break
        case '8':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height
              },
              image: createImage('./assets/pipeConnectorLeft.png')
            })
          )
          break
        case '.':
          pellets.push(
            new Pellet({
              position: {
                x: j * Boundary.width + Boundary.width / 2,
                y: i * Boundary.height + Boundary.height / 2
              }
            })
          )
          break
      }
    })
  })

function circleCollidesWithRectangle({circle, rectangle}){
  const padding = Boundary.width/2 - circle.radius - 1;
  return (circle.position.y  - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height + padding
      && circle.position.x + circle.radius + circle.velocity.x >= rectangle.position.x - padding
      && circle.position.y  + circle.radius + circle.velocity.y >= rectangle.position.y - padding  
      && circle.position.x - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width + padding);
} 

function circleCollidesWithRectangle1({circle, rectangle}){
  const padding = Boundary.width/2 - circle.radius - 1  ;
  return (circle.position.y + Boundary.width/2  - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height + padding
      && circle.position.x + Boundary.width/2 + circle.radius + circle.velocity.x >= rectangle.position.x - padding
      && circle.position.y  + Boundary.width/2 + circle.radius + circle.velocity.y >= rectangle.position.y - padding  
      && circle.position.x + Boundary.width/2 - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width + padding);
} 

let animationId ;
function animate(){
  
    animationId = requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);
        
    if(keys.w.pressed && lastkey === 'w'){
        for(let i=0; i<boundaries.length; i++){
            let boundary = boundaries[i];
            if( circleCollidesWithRectangle({circle: { ...player, velocity: { x: 0, y: -Player.speed} }
                , rectangle: boundary}) ){
                player.velocity.y = 0;
                break;
            }else{
                player.velocity.y = -Player.speed;
            }
        }
    }else if(keys.a.pressed && lastkey === 'a'){
        for(let i=0; i<boundaries.length; i++){
            let boundary = boundaries[i];
            if( circleCollidesWithRectangle({circle: { ...player, velocity: { x: -Player.speed, y: 0} }
                , rectangle: boundary}) ){
                player.velocity.x = 0;
                break;
            }else{
                player.velocity.x = -Player.speed;
            }
        }
    }else if(keys.s.pressed && lastkey === 's'){
        for(let i=0; i<boundaries.length; i++){
            let boundary = boundaries[i];
            if( circleCollidesWithRectangle({circle: { ...player, velocity: { x: 0, y: Player.speed} }
                , rectangle: boundary}) ){
                player.velocity.y = 0;
                break;
            }else{
                player.velocity.y = Player.speed;
            }
        }
    }else if(keys.d.pressed && lastkey === 'd'){
        for(let i=0; i<boundaries.length; i++){
            let boundary = boundaries[i];
            if( circleCollidesWithRectangle({circle: { ...player, velocity: { x: Player.speed, y: 0} }
                , rectangle: boundary}) ){
                player.velocity.x = 0;
                break;
            }else{
                player.velocity.x = Player.speed;
            }
        }
    }
    
    for(let i = pellets.length - 1; i >= 0; i--){
      let pellet = pellets[i];
      pellet.draw();  
      if(Math.hypot(pellet.position.x - player.position.x, pellet.position.y - player.position.y) < pellet.radius + player.radius) {
        pellets.splice(i, 1);
        audio_eat.play();
        score += 10;
        scoretag.innerHTML = score;
      }
    }

    if(pellets.length === 0){
      win.style.display = 'flex';
      cancelAnimationFrame(animationId);
    }

    boundaries.forEach((boundary) => {
        boundary.draw();
        if( circleCollidesWithRectangle({circle: player, rectangle: boundary}) ){
            player.velocity.y = 0;
            player.velocity.x = 0;
        } 
    })
    player.update();

    ghosts.forEach((ghost) => {
      ghost.update();
      if(Math.hypot(ghost.position.x - player.position.x + 2, ghost.position.y - player.position.y + 2) < ghost.radius + player.radius ) {
        audio_end.play();
        cancelAnimationFrame(animationId);
        gameover.style.display = 'flex';
        reset.style.display = 'flex';
        updateCounter();
        setTimeout(() => {
          location.reload();
        }, 5000);
      }
      let collisions = [];
      boundaries.forEach((boundary)=>{
        if( !collisions.includes("right") && circleCollidesWithRectangle1({circle: { ...ghost, velocity: { x: ghost.speed, y: 0} }
          , rectangle: boundary}) ){
            collisions.push("right");
        }
        if( !collisions.includes("left") && circleCollidesWithRectangle1({circle: { ...ghost, velocity: { x: -ghost.speed, y: 0} }
          , rectangle: boundary}) ){
            collisions.push("left");
        }
        if( !collisions.includes("down") && circleCollidesWithRectangle1({circle: { ...ghost, velocity: { x: 0, y: ghost.speed} }
          , rectangle: boundary}) ){
            collisions.push("down");
        }
        if( !collisions.includes("up") && circleCollidesWithRectangle1({circle: { ...ghost, velocity: { x: 0, y: -ghost.speed} }
          , rectangle: boundary}) ){
            collisions.push("up");
        }
      })
      if(collisions.length > ghost.prevCollisions.length){
        ghost.prevCollisions = collisions;
      }
      if(JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)){

        if(ghost.velocity.x > 0) ghost.prevCollisions.push('right');
        else if (ghost.velocity.x < 0) ghost.prevCollisions.push('left');
        else if (ghost.velocity.y > 0) ghost.prevCollisions.push('down');
        else if (ghost.velocity.y < 0) ghost.prevCollisions.push('up');

        const pathways = ghost.prevCollisions.filter(collision => {
          return !collisions.includes(collision)
        })

        const direction = pathways[Math.floor(Math.random() * pathways.length)]

        switch (direction){
          case 'down':
            ghost.velocity.y = ghost.speed;
            ghost.velocity.x = 0;
            break;
          case 'up':
            ghost.velocity.y = -ghost.speed;
            ghost.velocity.x = 0;
            break;
          case 'right':
            ghost.velocity.y = 0;
            ghost.velocity.x = ghost.speed;
            break;
          case 'left':
            ghost.velocity.y = 0;
            ghost.velocity.x = -ghost.speed;
            break;
        }
        ghost.prevCollisions = [];
      }
    })

    if(player.velocity.x > 0) player.rotation = 0;
    else if(player.velocity.x < 0) player.rotation = Math.PI;
    else if(player.velocity.y > 0) player.rotation = Math.PI/2;
    else if(player.velocity.y < 0) player.rotation = Math.PI * 1.5;
  
}


window.addEventListener("keydown", ({key}) => {
    switch(key){
        case 'w' :
            keys.w.pressed = true;
            lastkey = 'w';
            break;
        case 'a' :
            keys.a.pressed = true;
            lastkey = 'a';
            break;
        case 'd' :
            keys.d.pressed = true;
            lastkey = 'd';
            break;
        case 's' :
            keys.s.pressed = true;
            lastkey = 's';
            break;
    }
})

window.addEventListener("keyup", ({key}) => {
    switch(key){
        case 'w' :
            keys.w.pressed = false;
            break;
        case 'a' :
            keys.a.pressed = false;
            break;
        case 'd' :
            keys.d.pressed = false;
            break;
        case 's' :
            keys.s.pressed = false;
            break;
    }
})


const stars = [];

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

class Star {
  constructor() {
    this.x = randomRange(0, canvas.width);
    this.y = randomRange(0, canvas.height);
    this.size = randomRange(1, 5);
    this.speed = randomRange(0.1, 0.5);
  }
  update() {
    this.x -= this.speed;
    if (this.x < 0) {
      this.x = canvas.width;
      this.y = randomRange(0, canvas.height);
    }
  }

  draw() {
    let raccoon = Math.floor(Math.random() * 3) + 1;
    if (raccoon === 1) {
      c.fillStyle = "red";
    }
    if (raccoon === 2) {
      c.fillStyle = "blue";
    }
    if (raccoon === 3) {
      c.fillStyle = "yellow";
    }
    if (raccoon === 4) {
      c.fillStyle = "orange";
    }

    c.fillRect(this.x, this.y, this.size, this.size);
  }
}
for (let i = 0; i < 150; i++) {
  stars.push(new Star());
}

function animates() {
  window.requestAnimationFrame(animates);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    // star.update();
    star.draw();
  }
}

let smalldiv = document.getElementById("smalldiv");
let playbtn = document.getElementById("playbtn");
let moz=document.getElementById("moz")
let arjukumerft=document.getElementById("arjukumerft")
smalldiv.classList.add("animate__animated", "animate__zoomIn");
smalldiv.style.setProperty("--animate-duration", "5s");
playbtn.addEventListener("click", function () {
  audio_start.play();

  moz.style.display='none'
  arjukumerft.style.display='none'
  startgame();
animate();
});

animates();

