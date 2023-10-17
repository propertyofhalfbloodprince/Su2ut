let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
canvas.width = 425;
canvas.height = 425;
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
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    // star.update();
    star.draw();
  }
}
animates();
let smalldiv = document.getElementById("smalldiv");
let playbtn = document.getElementById("playbtn");
smalldiv.classList.add("animate__animated", "animate__zoomIn");
smalldiv.style.setProperty("--animate-duration", "5s");
playbtn.addEventListener("click", function () {
  // window.location.href = "pacman.html";
  smalldiv.display='none'
});
