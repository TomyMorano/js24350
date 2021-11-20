
let user = prompt("ingrese su usuario").toLowerCase()
let pass = prompt("ingrese su constraseña").toLowerCase()


if (user == "tutor" && pass == "coder" ){
    alert("Bienvenido, tutor!")

}else if(user == "tutor" && pass != "coder") {
    alert("Contraseña incorrecta")

}else if(user != "tutor" && pass == "coder"){
    alert("Usuario incorrecto")

}else{
    alert("Ninguno de los datos ingresados son correctos.")
}


