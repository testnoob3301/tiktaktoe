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


//  ??CHecking for more than one wins;
function checkwin(arr,b){
    let a1=[['1','5','9'],['3','5','7'],['1','4','7'],['2','5','8'],['3','6','9']]
    console.log("a ",arr);
    let x = false;
        a1.forEach(e1 => {
        if(arr.includes(e1[0])&&arr.includes(e1[1])&&arr.includes(e1[2])){
            x=true;
        }
    })
    if(x==true){declare(b)}
}
///////////////////////////////////////////////////////////////////////////////////////////////

///FOR STRAIGHT CHECK MATE;
function fx(a,b) {
    let x = false;
     towin.forEach(element => {
        y = [a.sort()[0],a.sort()[1],a.sort()[2]].toString();
        if(element.toString()==y){
            x=true;
        }
     })
     if(x===true){
        declare(b);
     }
     else{
        checkwin(a,b)
     };
}


function declare(p) {
    setTimeout(function(){
        if(p==" "){
            y = confirm("ITS A DRAW");
            document.location.reload();
        }
        else{
            y = confirm(p+" WINS");
            document.location.reload();
        }
},50);
}