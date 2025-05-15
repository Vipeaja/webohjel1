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




function aika(){
    var päivä = ["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"]
    var kuukausit = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    var päiväys = new Date()
    
    var paivamaar = document.getElementById("paivamaara")
    var aika = document.getElementById("aika")
    var paivaJaAika = document.getElementById("paivaJaAika")
    var viikonpaiva = document.getElementById("viikonpaiva")
    var kuukausi = document.getElementById("kuukausi")
    aika.innerHTML = päiväys.toLocaleTimeString()
    paivamaar.innerHTML = päiväys.toLocaleDateString()
    paivaJaAika.innerHTML = päiväys.toLocaleString()
    viikonpaiva.innerHTML = päivä[päiväys.getDay()]
    kuukausi.innerHTML = kuukausit[päiväys.getMonth()]
    

}