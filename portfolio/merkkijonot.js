function hello() {
    alert("Hello world!");
}

console.log("merkkijonot auki")

function sana(){
    var sarna = document.getElementById("texti").value;
    var kohta = document.getElementById("numero").value;
    var div = document.getElementById("sana")
    div.innerHTML = sarna[kohta-1]
}

function indexi(){
    var sarna2 = document.getElementById("texti2").value;
    var sarna3 = document.getElementById("texti3").value;
    var div2 = document.getElementById("indexi")
    div2.innerHTML = sarna2.indexOf(sarna3)+1
}

function leikkaa(){
    var sarna4 = document.getElementById("texti4").value;
    var kohta2 = document.getElementById("numero2").value;
    var kohta3 = document.getElementById("numero3").value;
    var div3 = document.getElementById("leikkaa")
    div3.innerHTML = sarna4.slice(kohta2,kohta3+1)
}

function etsi(){
    var sarna5 = document.getElementById("texti5").value;
    var sarna6 = document.getElementById("texti6").value;
    var sarna7 = document.getElementById("texti7").value;
    var div4 = document.getElementById("etsi")
    div4.innerHTML = sarna5.replaceAll(sarna6,sarna7)
}

function poikki(){
    var sarna8 = document.getElementById("texti8").value;
    var sarna9 = document.getElementById("texti9").value;
    var ul = document.getElementById("poikki")
    var sanoja = sarna8.split(sarna9)
    for (var sana of sanoja){
        var li = document.createElement("li")
        li.innerHTML = sana
        ul.append(li)
    }
}