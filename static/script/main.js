let count = 1;
function chimgp() {
  const img = document.getElementById("langi");
  if (count == 4) {
    count = 1;
    img.src = `static/picture/language/${count}.png`;
  } else {
    count++;
    img.src = `static/picture/language/${count}.png`;
    
  }
}
function chimgm() {
  const img = document.getElementById("langi");
  if (count == 1) {
    count = 4;
    img.src = `static/picture/language/${count}.png`;
  } else {
    count--;
    img.src = `static/picture/language/${count}.png`;
    
  }
}