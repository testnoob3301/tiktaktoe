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

  if (c == 0) {
    value = document.getElementById(b).innerHTML;
    forx[i] = value;
    i += 1;
    if (forx.length==3) {fx(forx, "X");}
    if (forx.length>3) {checkwin(forx, "X");}
    document.getElementById(b).innerHTML = "X";
    c = 1;
  } else if ((c = 1)) {
    value = parseInt(document.getElementById(b).innerHTML);
    fory[i1] = value;
    i1 += 1;
    value = parseInt(document.getElementById(b).innerHTML);
    document.getElementById(b).innerHTML = "O";
    if (fory.length>=3) {fx(fory, "Y");}
    // if (fory.length>3) {checkwin(fory, "Y");}
    c = 0;
  }

  //  Declaring DRAW
  if (moves == 9) {
    declare(" ");
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
