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

function laskin_Abs(){
    eka = Number(document.getElementById("numero1").value)
    
    alert(Math.abs(eka))
}

function laskin_Sqrt(){
    eka = Number(document.getElementById("numero1").value)
    
    alert(Math.sqrt(eka))
}

function laskin_Pow(){
    eka = Number(document.getElementById("numero1").value)
    toka = Number(document.getElementById("numero2").value)
    alert(Math.pow(eka,toka))
}

function laskin_Max(){
    eka = Number(document.getElementById("numero1").value)
    toka = Number(document.getElementById("numero2").value)
    alert(Math.max(eka,toka))
}

function laskin_Min(){
    eka = Number(document.getElementById("numero1").value)
    toka = Number(document.getElementById("numero2").value)
    alert(Math.min(eka,toka))
}

function laskin_Round(){
    eka = Number(document.getElementById("numero1").value)
    alert(Math.round(eka))
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

var Veijo = new Set(["luku","poisto"])
var Elvira = new Set(["luku","kirjoitus","muokkaus"])
var Mehdi = new Set(["luku","muokkaus","poisto"])
var Tuuli = new Set(["kirjoitus","poisto"])

for (var veijo1 of Veijo){
    rivi = document.getElementById("veijo")
    veijor = document.createElement("li")
    veijor.innerHTML = veijo1
    rivi.append(veijor)
}

for (var elvira1 of Elvira){
    rivi = document.getElementById("elvira")
    elvirar = document.createElement("li")
    elvirar.innerHTML = elvira1
    rivi.append(elvirar)
}

for (var mehdi1 of Mehdi){
    rivi = document.getElementById("mehdi")
    mehdir = document.createElement("li")
    mehdir.innerHTML = mehdi1
    rivi.append(mehdir)
}

for (var tuuli1 of Tuuli){
    rivi = document.getElementById("tuuli")
    tuulir = document.createElement("li")
    tuulir.innerHTML = tuuli1
    rivi.append(tuulir)
}

for (var veijotuuli1 of Veijo.union(Tuuli)){
    rivi = document.getElementById("Veijotuuli")
    veijotuulir = document.createElement("li")
    veijotuulir.innerHTML = veijotuuli1
    rivi.append(veijotuulir)
}

for (var mehdielvira1 of Mehdi.intersection(Elvira)){
    rivi = document.getElementById("Mehdielvira")
    mehdielvirar = document.createElement("li")
    mehdielvirar.innerHTML = mehdielvira1
    rivi.append(mehdielvirar)
}

for (var elviratuuli1 of Elvira.symmetricDifference(Tuuli)){
    rivi = document.getElementById("Elviratuuli")
    elviratuulir = document.createElement("li")
    elviratuulir.innerHTML = elviratuuli1
    rivi.append(elviratuulir)
}