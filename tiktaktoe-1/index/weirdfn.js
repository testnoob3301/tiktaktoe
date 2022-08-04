let towin=[
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['1','5','9'],
    ['3','5','7'],
    ['1','4','7'],
    ['2','5','8'],
    ['3','6','9'],
 ];



function checkwin(arr,b){
   if((
    (arr.includes(1)&&arr.includes(4)&&arr.includes(7))||
    (arr.includes(2)&&arr.includes(5)&&arr.includes(8))||
    (arr.includes(3)&&arr.includes(6)&&arr.includes(9))||
    (arr.includes(3)&&arr.includes(5)&&arr.includes(7))||
    (arr.includes(1)&&arr.includes(5)&&arr.includes(9))
   )){
    declare(b)
   }
}

// /FOR STRAIGHT CHECK MATE;
function fx(a,b) {
     towin.forEach(element => {
        y = [a.sort()[0],a.sort()[1],a.sort()[2]].toString();
        if(element.toString()==y){
            // return(b);
            declare(b);
        }
        else{
            checkwin(a,b);
        }
     });
}


function declare(p) {
    y = confirm(p+" WINS");
    if(p==" "){
        y = confirm("ITS A DRAW");
    }
    document.location.reload();
}