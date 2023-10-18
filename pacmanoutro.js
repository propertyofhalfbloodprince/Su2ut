
function wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

var container = $("#demo"),
    _sentenceEndExp = /(\.|\?|!)$/g; 

function machineGun(text) {
  var words = text.split(" "),
      tl = gsap.timeline({delay:1, repeat:0, repeatDelay:1}),
      wordCount = words.length,
      time = 0,
      word, element, duration, isSentenceEnd=false, i;
  
  for(i = 0; i < wordCount; i++){
    word = words[i];
    isSentenceEnd = _sentenceEndExp.test(word);


 
    element = $("<h3>" + word + "</h3>").appendTo(container);
    duration = Math.max(0.5, word.length * 0.2); 

    gsap.set(element, {autoAlpha:4, scale:0, z:0.01});
    tl.to(element, duration, {scale:1.2,  ease:"slow(0.25, 0.9)"}, time)
     	.to(element, duration, {autoAlpha:0, ease:"slow(0.25, 0.9)"}, time); 
    time += duration - 0.05;   
      if (isSentenceEnd) {
     
        
      time +=0.6; 
    
    }
  }
  
}

gsap.from("h2", {duration: 30, text: ""})
wait(30000).then(() => {
    demo.textContent=''
    machineGun("TO BE CONTINUED.");
   wait(5000).then(()=>{
    window.location.href = "pacman.html";
   })
    
 })


