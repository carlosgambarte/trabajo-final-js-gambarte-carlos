function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const options = {
        weekday: 'long',

        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // 24-hour format
    };
    const formattedDateTime = now.toLocaleString('es-ES', options);
    dateTimeElement.textContent = formattedDateTime;
}

// Actualizar la fecha y hora cada segundo
setInterval(updateDateTime, 1000);

// Mostrar la fecha y hora actual al cargar la página
updateDateTime();

//productos
let productos = []
fetch ("../js/producto.json")
.then (Response => Response.json())
.then (data =>{
    productos = data;

    cargarProductos(productos)

})

const contenedorproductos = document.querySelector("#contenedor-productos");

let botonesAgregar = document.querySelectorAll(".producto-agregar");

const numerito = document.querySelector ("#numerito");

function cargarProductos() {
    productos.forEach( producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        
        <img class=" producto-imagen" src="${producto.imagen}" alt=${producto.titulo}>

        <div class="producto-detalles">
         <h3 class="producto-titulo">${producto.titulo}</h3>

        <p class="producto-precio">  $ ${producto.precio} </p>

        <button class="producto-agregar" id="${producto.id}" >agregar a carrito </button>
        </div>

        `

        contenedorproductos.append(div);
    })

    actualizarBotonesAgregar()
    
}



//agregar productos al carrito

function actualizarBotonesAgregar() {
    
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlcarrito);
    })
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem ("productos-en-carrito")

if (productosEnCarritoLS) {

     productosEnCarrito = JSON.parse (productosEnCarritoLS) 
     actualizarNumerito()
} else {
    productosEnCarrito = []
}



function agregarAlcarrito(e) {
    Toastify({
        text: "Producto agregado",
        duration: 2000,
       
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, black, grey)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
    const idBoton= e.currentTarget.id;

    const productoAgregado = productos.find (producto => producto.id ===idBoton)
// console.log(productoAgregado);
     
if (productosEnCarrito.some (producto => producto.id ===idBoton)) {
    const index = productosEnCarrito.findIndex (producto => producto.id ===idBoton);
    productosEnCarrito [index].cantidad++

} else {
    productoAgregado.cantidad =1;
     
    productosEnCarrito.push (productoAgregado);
   
}
    actualizarNumerito()
  localStorage.setItem("productos-en-carrito", JSON.stringify (productosEnCarrito));



    }
 
   
  



function actualizarNumerito() {

    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}


