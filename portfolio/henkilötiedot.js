var henkilöt = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
]

function lisääRivi(){
    var nim = document.getElementById("nimi").value
    var ik = document.getElementById("ikä").value
    var työ = document.getElementById("työ").value

    
    var temp = {
        name:"",
        age:"",
        job:"",
        driversLicense:false
    }
    
    if (ik > 0){
        temp.age = ik
        temp.name = nim
        temp.job = työ
        if (document.getElementById("ajokortti").checked){
            temp.driversLicense = true
        }else{
            temp.driversLicense = false
        }
        
        henkilöt.push(temp)
        luoRivi()
    } else {
        alert("iän pitää olla positiivinen luku")
    }
    

}





function luoRivi(){
    var rivit = document.getElementById('rivit')
    rivit.innerHTML = ""
    for (var list of henkilöt){
        var rivi = document.createElement("tr")
        
        var nimi = document.createElement("td")
        nimi.innerHTML = list.name
        var ikä = document.createElement("td")
        if (list.age > 17){
            ikä.innerHTML = list.age+"🍺"
        } else {
            ikä.innerHTML = list.age
        }
        
        var job = document.createElement("td")
        if (list.job === "Opiskelija"){
            job.innerHTML = list.job+"🎓"
        } else {
            job.innerHTML = list.job
        }

        var kortti = document.createElement("td")
        kortti.innerHTML = list.driversLicense
        rivi.append(nimi)
        rivi.append(ikä)
        rivi.append(job)
        rivi.append(kortti)
        rivit.append(rivi)
        
    }
}

luoRivi()

console.log("henkilö auki")