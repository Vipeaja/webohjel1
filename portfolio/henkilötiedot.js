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





function luoRivi(){
    var rivit = document.getElementById('rivit')
    rivit.innerHTML = ""
    for (var list of henkilöt){
        var rivi = document.createElement("tr")
        
        var nimi = document.createElement("td")
        nimi.innerHTML = list.name
        var ikä = document.createElement("td")
        ikä.innerHTML = list.age
        var job = document.createElement("td")
        job.innerHTML = list.job
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