// 2025.js

var i = 0;
var text = "Brandan Herron";

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);  // Speed of typing in milliseconds
  }
}

// Run typeWriter after the page fully loads
window.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
