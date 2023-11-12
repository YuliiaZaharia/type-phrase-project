let text = "I am inspiring by innovative web experiences!"; 
let i = 0;
let speed = 100; 

function typePhrase() {
  if (i < text.length) {
    document.querySelector("#par").textContent += text.charAt(i);
    i++; 
    setTimeout(typePhrase, speed); 
  }
}

typePhrase(); 

