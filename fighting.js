const canvas = document.getElementById("canvasty");
const c = canvas.getContext("2d");
let nbs=document.getElementById("nbs")
let texty=document.getElementById("texty")
let startgame=document.getElementById("startgame")
let contain=document.getElementById("contain")
let gamma=document.getElementById("gamma")
var counter=1
let exitfromfight=document.getElementById("exit")

const gravity = 0.2;
canvas.width = 800;
canvas.height = 500;
c.fillRect(0, 0, canvas.width, canvas.height);
const stars = [];
var music={
 bg:new Howl({
  src:["https://assets.codepen.io/21542/howler-demo-bg-music.mp3"],

 })
}
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
    c.fillStyle = "white";
    c.fillRect(this.x, this.y, this.size, this.size);
  }
}
for (let i = 0; i < 100; i++) {
  stars.push(new Star());
}

class Character {
  constructor({ position, velocity, dimensions,imgSrc }) {
    this.position = position;
    this.velocity = velocity;
    this.dimensions = dimensions;
    const image = new Image();
    this.image = image;
    this.image.src = imgSrc;
    this.opacity=1

  }
  draw() {
    c.save()
    c.globalAlpha=this.opacity
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.dimensions.width,
      this.dimensions.height
    );
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
  }
}
class Projectile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.image = new Image();
    this.image.src = "fireball.png";
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, 30, 30);
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
class EnemyProjectile {
  constructor({ position, velocity, imgSrc }) {
    this.position = position;
    this.velocity = velocity;
    this.width = 6;
    this.height = 20;
  }
  draw() {
    c.fillStyle = "white";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
class Enemy {
  constructor({ position, imgSrc }) {
    this.position = position;
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.image = new Image();
    this.image.src = imgSrc;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, 100, 100);
  }
  update({ velocity }) {
    this.draw();
    this.position.x += velocity.x;
    this.position.y += velocity.y;
  }
  shoot(enemyProjectiles) {
    enemyProjectiles.push(
      new EnemyProjectile({
        position: {
          x: this.position.x + 50,
          y: this.position.y + 100,
        },
        velocity: {
          x: 0,
          y: 4,
        },
      })
    );
  }
}
class Grid {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.velocity = {
      x: 1.75,
      y: 0,
    };
    this.enemies = [];
    let columns = Math.floor(Math.random() * 4) + 2;
    let rows = Math.floor(Math.random() * 3) + 1;
    this.width = columns * 100;
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        let raccoon = Math.floor(Math.random() * 12) + 1;
        if (raccoon === 1) {
          this.enemies.push(
            new Enemy({
              position: {
                x: i * 100,
                y: j * 100,
              },
              imgSrc: "OPTICS.png",
            })
          );
        }  
        if (raccoon === 2) {
          this.enemies.push(
            new Enemy({
              position: {
                x: i * 100,
                y: j * 100,
              },
              imgSrc: "ORAGNIC.png",
            })
          );
        }
        if (raccoon ===3) {
            this.enemies.push(
              new Enemy({
                position: {
                  x: i * 100,
                  y: j * 100,
                },
                imgSrc: "ANALYSIS.png",
              })
            );
          }
          if (raccoon ===4) {
            this.enemies.push(
              new Enemy({
                position: {
                  x: i * 100,
                  y: j * 100,
                },
                imgSrc: "ALGEBRA.png",
              })
            );
          }  
          if (raccoon ===5) {
            this.enemies.push(
              new Enemy({
                position: {
                  x: i * 100,
                  y: j * 100,
                },
                imgSrc: "THERMO.png",
              })
            );
          } 
          if (raccoon ===6) {
            this.enemies.push(
              new Enemy({
                position: {
                  x: i * 100,
                  y: j * 100,
                },
                imgSrc: "INDUSTRIAL.png",
              })
            );
          } 
          if (raccoon ===7) {
            this.enemies.push(
              new Enemy({
                position: {
                  x: i * 100,
                  y: j * 100,
                },
                imgSrc: "mechanics.png",
              })
            );
          } 
          if (raccoon ===8) {
            this.enemies.push(
              new Enemy({
                position: {
                  x: i * 100,
                  y: j * 100,
                },
                imgSrc: "PERSPECTIVE.png",
              })
            );
          } 
          if (raccoon ===9) {
            this.enemies.push(
              new Enemy({
                position: {
                  x: i * 100,
                  y: j * 100,
                },
                imgSrc: "differential.png",
              })
            );
          } 
          if (raccoon ===10) {
            this.enemies.push(
              new Enemy({
                position: {
                  x: i * 100,
                  y: j * 100,
                },
                imgSrc: "CS.png",
              })
            );
          } 
          if (raccoon ===11) {
            this.enemies.push(
              new Enemy({
                position: {
                  x: i * 100,
                  y: j * 100,
                },
                imgSrc: "COMPLEX.png",
              })
            );
          } 
          if (raccoon ===12) {
            this.enemies.push(
              new Enemy({
                position: {
                  x: i * 100,
                  y: j * 100,
                },
                imgSrc: "STATICS.png",
              })
            );
          } 
          if(raccoon===13){
            this.enemies.push(
              new Enemy({
                position: {
                  x: i * 100,
                  y: j * 100,
                },
                imgSrc: "NUMERICAL.png",
              })
            );
          }
      }
    }
  }
  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.y = 0;
    if (this.position.x + this.width >= canvas.width || this.position.x < 0) {
      this.velocity.x = -this.velocity.x;
      this.velocity.y += 50;
    }
  }
}
let screengame=false
let enemyProjectiles = [];
let grids = [];
let projectiles = [];
const player = new Character({
  position: {
    x: canvas.width / 2 - 80,
    y: canvas.height - 80,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  dimensions: {
    width: 80,
    height: 80,
  },
  imgSrc: "cat.png",
});

player.draw();
let keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
};

const losing=document.getElementById("losing")
let lastkey;
let frames = 0;

let games={
  over:false,
  active:true
}
let radnomIntervals = Math.floor(Math.random() * 500 + 500);
let scores=0
function animate2(){
  if(screengame)return
  window.requestAnimationFrame(animate2)
  c.fillStyle='black'
  c.fillRect(0,0,canvas.width,canvas.height)
  for (const star of stars) {
      star.update();
      star.draw();
  }
}
function restartgame(){
  c.clearRect(0,0,800,500)
  lastkey;
  keys = {
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
    space: {
      pressed: false,
    },
  };
  frames = 0;
  games={
    over:false,
    active:true
  }
  radnomIntervals = Math.floor(Math.random() * 500 + 500);
  scores=0
  nbs.innerHTML=scores
  screengame=false
    enemyProjectiles = [];
    grids = [];
    projectiles = [];
    player.opacity=1
    animate()
}
function animate() {
 if(bigdiv.style.display==='none'){
  setTimeout(() => {
   
    player.opacity=0
    games.over=true
    music.bg.stop()
  },0);
  setTimeout(() => {
    games.active=false
    losing.textContent='do you think you can escape this ?'
    texty.textContent='try again'
    startgame.style.display='block'
  },2000);
  
 }
  if(games.active===false  ){
    return
    }
  
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  for (const star of stars) {
    star.update();
    star.draw();
  }
  player.update();
  enemyProjectiles.forEach((enemyProjectile, index) => {
    if (enemyProjectile.position.y + enemyProjectile.height >= canvas.height) {
      setTimeout(() => {
        enemyProjectiles.splice(index, 1);
      }, 0);
    } else {
      enemyProjectile.update();
    }
    if (
      enemyProjectile.position.y + enemyProjectile.height >=
        player.position.y &&
      enemyProjectile.position.x + enemyProjectile.width >= player.position.x &&
      enemyProjectile.position.x <= player.position.x + 100
    ) {
      setTimeout(() => {
        enemyProjectiles.splice(index, 1);
        player.opacity=0
        games.over=true
        music.bg.stop()
      },0);
      setTimeout(() => {
        games.active=false
        losing.textContent='You lost ya sa2ut'
        texty.textContent='try again'
        startgame.style.display='block'
      },2000);
    }
  });
  projectiles.forEach((projectile, index) => {
    if (projectile.position.y <= 0) {
      setTimeout(() => {
        projectiles.splice(index, 1);
      }, 0);
    } else {
      projectile.update();
    }
  });
  grids.forEach((grid, gridIndex) => {
    grid.update();
    if (frames % 100 === 0 && grid.enemies.length > 0) {
      grid.enemies[Math.floor(Math.random() * grid.enemies.length)].shoot(
        enemyProjectiles
      );
    }
    grid.enemies.forEach((enemy, i) => {
      enemy.update({ velocity: grid.velocity });
      if(enemy.position.y+100>=player.position.y+40){
      setTimeout(() => {
        player.opacity=0
        games.over=true
        music.bg.stop()
      },0);
      setTimeout(() => {
        games.active=false
        losing.textContent='You lost ya sa2ut'
        texty.textContent='try again'
        startgame.style.display='block'
      },2000);
    }
     
      projectiles.forEach((projectile, j) => {
        if (
          projectile.position.y <= enemy.position.y + 100 &&
          projectile.position.x + 30 >= enemy.position.x &&
          projectile.position.x <= enemy.position.x + 100 &&
          projectile.position.y + 30 >= enemy.position.y
        ) {
          setTimeout(() => {
            const enemyfound = grid.enemies.find((enemy2) => {
              return enemy2 === enemy;
            });
            const projectilefound = projectiles.find((projectile2) => {
              return projectile2 === projectile;
            });
            if (enemyfound && projectilefound) {
              scores+=100
              nbs.innerHTML=scores
              grid.enemies.splice(i, 1);
              projectiles.splice(j, 1);
              if(counter===1 && scores>=3000){
              
                setTimeout(() => {
                  player.opacity=0
                  games.over=true
                  
                  music.bg.stop()
                },0);
                setTimeout(() => {
                  counter++
                  games.active=false
                    losing.textContent='You thought you won,jk reach 3500 to win'
                    texty.textContent='hehe'
                  startgame.style.display='block'
                  
                },2000);
              }
            
         if(counter===2 && scores>=3500){
                setTimeout(() => {
                  player.opacity=0
                  games.over=true
                
                  counter++
                  music.bg.stop()
                },0);
                setTimeout(() => {
                  
                  games.active=false
                    losing.textContent='Take the book, you win. Until we meet again :)'
                    
                    contain.style.display='none'
                    startgame.style.display='block'
                    gamma.style.display='block'
                    
                },2000);
              }
            
              if (grid.enemies.length > 0) {
                const firstenemy = grid.enemies[0];
                const lastenemy = grid.enemies[grid.enemies.length - 1];
                grid.width = lastenemy.position.x - firstenemy.position.x + 100;
                grid.position.x = firstenemy.position.x;
              } else {
                grids.splice(gridIndex, 1);
              }
            }
          }, 0);
        }
      });
    });
  });
  player.velocity.x = 0;
  if (keys.a.pressed && lastkey === "a" && player.position.x > 0) {
    player.velocity.x = -5;
  } else if (
    keys.d.pressed &&
    lastkey === "d" &&
    player.position.x + player.dimensions.width < canvas.width
  ) {
    player.velocity.x = 5;
  }
  if (frames % radnomIntervals === 0) {
    grids.push(new Grid());
    radnomIntervals = Math.floor(Math.random() * 500 + 500);
    frames = 0;
  }

  frames++;
}

window.addEventListener("keydown", (event) => {
 if(games.over)return
  switch (event.key) {
    case "d":
      keys.d.pressed = true;
      lastkey = "d";
      break;
    case "a":
      keys.a.pressed = true;
      lastkey = "a";
      break;
    case " ":
      keys.space.pressed = true;
      projectiles.push(
        new Projectile({
          position: {
            x: player.position.x + player.dimensions.width / 2 - 20,
            y: player.position.y - 25,
          },
          velocity: {
            x: 0,
            y: -3,
          },
        })
      );
      break;
  }
});
window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case " ":
      keys.space.pressed = false;
      break;
  }
});

animate2()

texty.addEventListener("click", function() {
  if(texty.textContent==='Play'){
      startgame.style.display='none'
      screengame=true
      makdus.pause();
      music.bg.play()
      animate() 
  }
  else{
    startgame.style.display='none'
    makdus.pause();
    music.bg.play()
    restartgame()
  }

});
exitfromfight.addEventListener('click',()=>{
  makdus.play();
  bigdiv.style.display='none'
  canvasa.classList.remove("active");
})