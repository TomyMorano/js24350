    //          BackOfiice(masomenos)
//Variables:
user = ""
pass = ""
check = Boolean
const listaProdStorage = []
div1 = document.getElementById("div1")

//Funciones Constructoras
class Producto{
    constructor({
        id, 
        nombre,
        precio,
        categoria,
        stock,
    }){ 
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.stock = stock
    }
}
//Productos Hardcodeado
const listaProd = []
listaProd.push(new Producto({id:2,nombre:"Monitor",precio:12000,categoria:"Computación",stock:15,}))
listaProd.push(new Producto({id:3,nombre:"Cable HDMI",precio:2000,categoria:"Computacion",stock:15}))
listaProd.push(new Producto({id:4,nombre:"Escritorio L",precio:18500,categoria:"Muebles y Deco",stock:2}))
listaProd.push(new Producto({id:5,nombre:'Lampara de noche',precio:3500,categoria:'Muebles y Deco',stock:12}))

//Función Guardar en localStorage
const guardarLocal =(a,b)=>{
    localStorage.setItem(a,b)
}

//Función crear Productos
const crearProductos=()=>{
    id = Math.floor(Math.random()*1000)
    nombre = prompt("ingresa el nombre del producto")
    precio = Number(prompt("ingresa el precio del producto"))
    categoria = prompt("ingresa el categoria del producto")
    stock = Number(prompt("ingresa el stock del producto"))

    prod1 = new Producto({
        id,
        nombre,
        precio,
        categoria,
        stock,
    })
    listaProdStorage.push(prod1)
    listaProd.push(prod1)

    //Validación para guardar datos
    if(nombre != null || nombre != undefined){
        guardarLocal(JSON.stringify(prod1.id),JSON.stringify(listaProdStorage))
    }
    return prod1
}
//Boton para crear productos
let bntProd= document.getElementById("btnCrearProd")

bntProd.addEventListener("click",()=>{
    crearProductos()
    console.log(listaProd)
})

//Funcion para checkear usuario(login)
function checkUsuario (){
    user = prompt('Ingrese su nombre de usuario')
    pass = prompt('ingrese su contraseña')
    while(check){
        if (user == "tutor" && pass == "coder" ){
            alert("Bienvenido al backOffice, asegurese de crear todos los productos necesarios antes de mostrarlos.")

            bntProd.setAttribute("class","visible")
            btnLog.setAttribute("class","invisible")
            
            break
        }else{
            check = confirm("Datos Incorrectos, desea seguir intentando? Aceptar = Si Cancelar = No")
            checkUsuario()
        }
    }
}
//Boton para Login
btnLog = document.getElementById("btnLog")

btnLog.addEventListener("click",()=>{
    checkUsuario()
})

//Boton y Funcion  para mostrar los productos
btnShow = document.getElementById("bntShow")

const mostrarProductos =() =>{
    for (const i of listaProd){
        cards = document.createElement("p")
        cards.innerHTML =`
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Nombre: ${i.nombre}</h5>
          <h5 class="card-title">Precio:$ ${i.precio}</h5>
          <h5 class="card-title">Categoría: ${i.categoria}</h5>
          <h5 class="card-title">Stock Disponible: ${i.stock}</h5>
          <h5 class="card-title">ID del Producto: ${i.id}</h5>
        </div>`
        document.body.appendChild(cards)
    }
}
btnShow.addEventListener("click",()=>{
    mostrarProductos()
})