// /variables/
let c = 0;
let moves = 0;
let forx = [];
let fory = [];
let i = 0;
let i1 = 0;
////////
const getid = function () {
  moves = moves + 1;
  b = this.id;

////CHANGINg the color
  document.getElementById(b).classList.remove('grid-item');
  document.getElementById(b).classList.add('final');
  
  
  if (c == 0) {
    document.getElementById("turn").innerHTML="O"
    value = document.getElementById(b).innerHTML;
    forx[i] = value;
    i += 1;
    if (forx.length>3) {fx(forx, "X");}
    document.getElementById(b).innerHTML = "X";
    c = 1;
  } else if ((c = 1)) {
    document.getElementById("turn").innerHTML="X"
    value = document.getElementById(b).innerHTML
    fory[i1] = value;
    i1 += 1;
    if (fory.length>=3) {fx(fory, "Y");}
    document.getElementById(b).innerHTML = "O";
    c = 0;
  }

};

// /SLEECTORS/
document.getElementById("b1").addEventListener("click", getid);
document.getElementById("b2").addEventListener("click", getid);
document.getElementById("b3").addEventListener("click", getid);
document.getElementById("b4").addEventListener("click", getid);
document.getElementById("b5").addEventListener("click", getid);
document.getElementById("b6").addEventListener("click", getid);
document.getElementById("b7").addEventListener("click", getid);
document.getElementById("b8").addEventListener("click", getid);
document.getElementById("b9").addEventListener("click", getid);
