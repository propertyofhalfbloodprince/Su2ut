let okkk=document.getElementById("okkk")
okkk.classList.add('animate__animated', 'animate__fadeIn');
okkk.style.setProperty('--animate-duration', '3s');
let hbb=document.getElementById("hbb")
hbb.classList.add('animate__animated', 'animate__fadeIn');
hbb.style.setProperty('--animate-duration', '3s');
let akh=document.getElementById("akh")
akh.classList.add('animate__animated', 'animate__fadeIn');
akh.style.setProperty('--animate-duration', '3s');
let grave=document.getElementById("grave")
let bekh=document.getElementById("bekh")
let fire=document.getElementById("fire")
let bhbh=document.getElementById("bhbh")
let msg=document.getElementById("msg")
grave.style.display="none";
bekh.style.display="none";
fire.style.display="none";
function wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
akh.addEventListener("click", function () {
  akh.classList.add('animate__animated', 'animate__hinge');
  akh.style.setProperty('--animate-duration', '1.5s');
  okkk.classList.add('animate__animated', 'animate__zoomOutUp');
  okkk.style.setProperty('--animate-duration', '2.5s');
  hbb.classList.add('animate__animated', 'animate__zoomOutUp');
  hbb.style.setProperty('--animate-duration', '2.5s');
  bhbh.play();
  wait(2700).then(() => {
    grave.style.display="block";
    bekh.style.display="block";
    grave.classList.add('animate__animated', 'animate__slideInUp');
    grave.style.setProperty('--animate-duration', '1.5s');
    bekh.classList.add('animate__animated', 'animate__slideInUp');
    bekh.style.setProperty('--animate-duration', '1.5s');
    wait(1000).then(() => {
      fire.style.display="block";
    fire.classList.add('animate__animated', 'animate__fadeIn');
    fire.style.setProperty('--animate-duration', '1.5s');
    gsap.registerPlugin(TextPlugin);
    gsap.to(msg, {duration: 10, text: "Ah you're a stubborn one I see just like many before you, but nonetheless it won't be hard to break your spirit."});
    wait(10000).then(() => {
    gsap.to(msg, {duration: 0.5, text: ""});
    wait(500).then(() => {
    gsap.to(msg, {duration: 10, text: "You might wonder what is this place ? Well.. this is your new home, welcome to the rock bottom!"});
    wait(10000).then(() => {
      gsap.to(msg, {duration: 0.5, text: ""});
      wait(500).then(() => {
    gsap.to(msg, {duration: 10, text: "Strap in because the hole only gets deeper. Fool of you to assume that you've been here before cause this place is like no other."});
    wait(11000).then(() => {
      gsap.to(msg, {duration: 0.5, text: ""});
      wait(500).then(() => {
    fire.classList.add('animate__animated', 'animate__fadeOut');
    fire.style.setProperty('--animate-duration', '1s');
    wait(700).then(() => {
    grave.classList.add('animate__animated', 'animate__slideOutDown');
    grave.style.setProperty('--animate-duration', '1.5s');
    bekh.classList.add('animate__animated', 'animate__slideOutDown');
    bekh.style.setProperty('--animate-duration', '1.5s');
    wait(500).then(() => {
    window.location.replace("intro.html");
  });});});});});});
  });
  });
  });
  });
  });
