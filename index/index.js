const getid = function () {
  moves=moves+1;
  b = this.id;
  if(c==0){
    document.getElementById(b).innerHTML="X";
    c=1;
  }
  else if(c=1){
    document.getElementById(b).innerHTML="O";
    c=0;
  }
  if(moves=>5){
    checkwin()}
};

// /variables/
let c = 0;
let moves =0;
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
 

