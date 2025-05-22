function hello() {
    alert("Hello world!");
}

console.log("kasino auki")


function noppa(){
    var divi1 = document.getElementById("noppa");
    divi1.innerHTML = Math.floor(Math.random()* (7-1))+1;
}

function lotto(){
    
    var nume1 = document.getElementById("num1").value;
    var nume2 = document.getElementById("num2").value;
    var nume3 = document.getElementById("num3").value;
    var nume4 = document.getElementById("num4").value;
    var nume5 = document.getElementById("num5").value;
    var nume6 = document.getElementById("num6").value;
    var nume7 = document.getElementById("num7").value;

    var divi3 = document.getElementById("lotto2");
    var divi2 = document.getElementById("lotto");
    var num1 = Math.floor(Math.random()* (41-1))+1;
    var num2 = Math.floor(Math.random()* (41-1))+1;
    var num3 = Math.floor(Math.random()* (41-1))+1;
    var num4 = Math.floor(Math.random()* (41-1))+1;
    var num5 = Math.floor(Math.random()* (41-1))+1;
    var num6 = Math.floor(Math.random()* (41-1))+1;
    var num7 = Math.floor(Math.random()* (41-1))+1;
    var nu = 0;
    if (nume1 == num1){
        nu++;
    }
    if (nume2 == num2){
        nu++;
    }
    if (nume3 == num3){
        nu++;
    }
    if (nume4 == num4){
        nu++;
    }
    if (nume5 == num5){
        nu++;
    }
    if (nume6 == num6){
        nu++;
    }
    if (nume7 == num7){
        nu++;
    }

    divi3.innerHTML = nu + "/" + "7"
    divi2.innerHTML = num1 + " " + num2 + " " + num3 + " " + num4 + " " + num5 + " " + num6 + " " + num7
}