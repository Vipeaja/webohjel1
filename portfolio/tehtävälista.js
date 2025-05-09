var lista = ["Tehtävä1","Tehtävä2"]

function paivitalista(){
    var elementti = document.getElementById('ul')
    elementti.innerHTML = ""
    for (var list of lista){
        var ele = document.createElement('li')
        ele.innerHTML = list
        elementti.append(ele)
    }
}

function lisaa(){
    var texti = document.getElementById("lisää").value
    var kertaa = document.getElementById("kertaa").value
    for (let i = 0; i < kertaa; i++){
        lista.push(texti)
    }
    
    paivitalista()
}

console.log("tehtävä auki")