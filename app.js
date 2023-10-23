//INCREASE FUNTION//

function increase() {
    var bulana= document.getElementById("boom");
    var check = bulana.innerHTML;
    ++check;
    document.getElementById("boom").innerHTML=check;
    console.log(check);
    
}


//RESET FUNTION//

function reset() {
    var khali = document.getElementById("boom");
    var gayab = document.getElementById("boom").innerHTML=0;
    
}


//FUNTION DECREASE//

function decrease() {
    var bulana= document.getElementById("boom");
    var check = bulana.innerHTML;
    --check;
    document.getElementById("boom").innerHTML=check;
    console.log(check);
    
}
