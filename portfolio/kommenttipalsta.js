function hello() {
    alert("Hello world!");
}
console.log("kommentti auki")

function sendet() {
    birthdayField = document.getElementById("synty").value
    emailField = document.getElementById("email").value
    typeField = document.getElementById("viesti").value
    usageField = document.getElementById("cookies").value
    bodyField = document.getElementById("texti").value

    console.log(birthdayField)
    console.log(emailField)
    console.log(typeField)
    console.log(usageField)
    console.log(bodyField)

}



function closedial() {
    dialog.preventDefault()
    dialog = document.getElementById("dialo")
    dialog.close()
}

function opendial() {
    dialog = document.getElementById("dialo");
    dialog.showModal();
}