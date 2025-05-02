a = 3;
b = 5;
c = 7;
d = 15;

function summa(){
    alert(a+b)
}

function vähennys(){
    alert(b-c)
}

function kerto(){
    alert(c*d)
}

function jako(){
    alert(d/a)
}


function laskin_summa(){
    eka = Number(document.getElementById("numero1").value)
    toka = Number(document.getElementById("numero2").value)
    alert(eka+toka)
}

function laskin_vähennys(){
    eka = Number(document.getElementById("numero1").value)
    toka = Number(document.getElementById("numero2").value)
    alert(eka-toka)
}

function laskin_kerto(){
    eka = Number(document.getElementById("numero1").value)
    toka = Number(document.getElementById("numero2").value)
    alert(eka*toka)
}

function laskin_jako(){
    eka = Number(document.getElementById("numero1").value)
    toka = Number(document.getElementById("numero2").value)
    alert(eka/toka)
}




