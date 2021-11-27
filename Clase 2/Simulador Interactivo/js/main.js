//  Simulador de Costo de Interes

let checkFinal = Boolean

while(checkFinal){
    //Pedida de datos...
    let precio = Number(prompt("Ingrese el costo a pagar"))

    let cuotas = Number(prompt("Ingrese el número de cuotas"))

    //Confirmación de si tiene interés...

    let check = confirm('¿Tiene interes? ACEPTAR =SI --- CANCELAR = NO')

    //Pedir el interes
    let interes = Number()
    let tasaInt = Number()

    function pedirInteres() {
        if(check === true){
            tasaInt = Number(prompt("Ingrese el interés, SOLO EL NÚMERO SIN EL %"))/100
            interes = tasaInt*precio
            return interes
        }
    }
    pedirInteres()

    //Calculo final
    let precioFinal = Number()

    function operacionFinal (){

        if(check === true){
            precioFinal = interes+precio

        }else if(check === false){
            precioFinal = precio
        }
        return precioFinal
    }
    operacionFinal()

    //Calcular precio de cuotas
    precioCuota = Number()
    function cuotasPrecio(){
        precioCuota = precioFinal/cuotas
        return precioCuota
    }
    cuotasPrecio()
    //Muestra en consola
    console.log("-----------------------------")
    console.log(`precio inicial ${precio}`)
    console.log(`número de cuotas ${cuotas}`)
    console.log(`El costo por cuota es de $${precioCuota}`);
    console.log(`la tasa de interes es de ${tasaInt*100}%`)
    console.log(`interés es de $${interes}`)
    console.log(`el precio final es ${precioFinal}`)
    console.log("-----------------------------")

    //Muestra de Resultados 
    alert(`----------------------------
    El precio inicial es de $${precio} \n
    El número de cuotas ${cuotas} \n
    El costo por cuota es de $${precioCuota} \n
    La tasa de interes es de ${tasaInt*100}% \n
    interés es de $${interes} \n
    El precio final es $${precioFinal}
    ----------------------------`)
    
    //Chek final xd
    checkFinal = confirm('Desea calcular otra vez? ACEPTAR = SI --- CANCELAR = NO')
}