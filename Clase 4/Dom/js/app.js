//Variables

let listaCarrito = []
let productoAgregadoAlCarro
//Constructora productos
class Producto{
    constructor({
        nombre,
        id,
        precio,
        marca,
        stock,
        contadorCarro,
        img,
    }){
        this.nombre = nombre
        this.id = id
        this.precio = precio
        this.marca = marca
        this.stock = stock
        this.contadorCarro = contadorCarro
        this.img = img
    }
    agregarAlContador(cantidad){
        this.contadorCarro += cantidad
    }
    restarAlContador(cantidad){
        this.contadorCarro -= cantidad
    }
}
//Guardar en local storage
const setStorage =(nombre, valor)=>{
    localStorage.setItem(nombre, JSON.stringify(valor))
}
//Tomar de local storage
const getStorage =(valor)=>{
    let productoLocalStorage = localStorage.getItem(valor)
    if(productoLocalStorage){
        productoLocalStorage = JSON.parse(localStorage.getItem(valor))
    } else {
        productoLocalStorage = []
    }
    return productoLocalStorage
}

//Lista de productos
const listaProductos = []

listaProductos.push(new Producto({nombre:"Monitor 23.5 Pulgadas", id:1, precio:17500, marca:"HP", stock:4 , contadorCarro:1,  img:"img/ImgMonitorHP.jpg"}))
listaProductos.push(new Producto({nombre:"Mouse con Cable", id:2, precio:500, marca:"Logitech", stock:15 , contadorCarro:1, img:"img/imgMouseLogitech.jpg"}))
listaProductos.push(new Producto({nombre:"Auriculares con Microfono", id:3, precio:2500, marca:"Logitech", stock:10 , contadorCarro:1, img:"img/imgAuricularesLogitechCable.jpg"}))
listaProductos.push(new Producto({nombre:"Impresora Multifunción", id:4, precio:22500, marca:"HP", stock:5 , contadorCarro:1, img:"img/imgImpresoraHP.jpg"}))
listaProductos.push(new Producto({nombre:"Auriculares Inalambricos", id:5, precio:12500, marca:"Logitech", stock:7 , contadorCarro:1 ,img:"img/imgAuricularesLogitechInalambricos.jpg"}))

setStorage("Productos",listaProductos)

//Contenedor de los productos Estaticos
let divContenedorProductos = document.getElementById("divProductos")

//Cards de los productos del carrito
let cardsCarrito= document.createElement("div")

//Cards que presentan los productos, con atributos de bootstrap
let cardsEstaticas = document.createElement("div")

cardsEstaticas.setAttribute("class",'row row-cols-2')

//Funcion Mostrar Productos (pide un array para recorrer y un id contenedor "")

const displayProductos =(lista,contenedor)=>{
    let divContenedor= contenedor
    for (const i of lista) {
        //Display de carrito de compras
        if(lista === listaCarrito){
            cardsCarrito.innerHTML+=`        
            <div class="card mt-3" style="width: 18rem;">    
            <span><h3 ><span class="badge bg-secondary">${i.contadorCarro}</span></h3>
            <div class="card-header">${i.nombre}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Precio: $${i.precio}</li>
                    <li class="list-group-item">Subtotal: $${i.precio * i.contadorCarro}</li>
                </ul>
            </div>`
            divCarrito.appendChild(divContenedor)
        }
        //Display de Productos Estaticos
        else if(lista === listaProductos){
            divContenedor.innerHTML+=
            `<div class="col">
                <div class="card col-md-10 mt-5">
                <img class="img-fluid" src="${i.img}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${i.nombre}</h5>
                        <h5 class="card-title">$${i.precio}</h5>
                        <p class="card-text">Producto marca ${i.marca}, actualmente contamos con ${i.stock} unidades en stock</p>
                        <button type="button" class="btn btn-outline-secondary btnAgregarCarro"id="${i.id}">Agregar al carro de compras</button>
                    </div>
                </div>
            </div>`
            divContenedorProductos.appendChild(divContenedor)
        }
    }
}
displayProductos(listaProductos,cardsEstaticas)

//Contenedor donde se generan los items del carrito
let divCarrito = document.getElementById('divCarrito')

btnCarro = document.querySelectorAll('.btnAgregarCarro')

//Función para agregar los productos al carro de compras e imprimirlos
const AgregarAlCarro =(e)=>{
    e.preventDefault()
    cardsCarrito.innerHTML=""
    const idProd = e.target.id

    const yaEstaEnElCarro = listaCarrito.find(producto => producto.id == idProd)
    if(yaEstaEnElCarro == undefined){
        const productoSeleccionado = listaProductos.find((producto)=>producto.id == idProd)
        listaCarrito.push(productoSeleccionado)
    }else if(yaEstaEnElCarro !== undefined){
        yaEstaEnElCarro.agregarAlContador(1)
    }
    displayProductos(listaCarrito,cardsCarrito)
}
btnCarro.forEach(boton => {
    boton.addEventListener('click',(e)=>{
        AgregarAlCarro(e)
    })
});

//BOTONES PARA AGREGAR Y RESTAR PRODUCTOS DEL CARRO DE COMPRA



