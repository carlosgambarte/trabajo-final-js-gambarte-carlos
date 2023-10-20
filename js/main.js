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
    const formattedDateTime = now.toLocaleString ('es-ES', options);
    dateTimeElement.textContent = formattedDateTime;
}

// Actualizar la fecha y hora cada segundo
setInterval(updateDateTime, 1000);

// Mostrar la fecha y hora actual al cargar la página
updateDateTime();

//productos

const productos = [
    {
        
        id:"remera-01",
        nombre: "remera 01",
        imagen:"../img/remera 13.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    },
   
    {
        id:"remera-02",
        nombre: "remera 02",
        imagen:"../img/remera 14.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    },
    {
        
        id:"remera-03",
        nombre: "remera 03",
        imagen:"../img/remera 15.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    },
    {
        id:"remera-04",
        nombre: "remera 04",
        imagen:"../img/remera 16.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    },
    {
        
        id:"remera-05",
        nombre: "remera 05",
        imagen:"../img/remera 17.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    },
    {
        
        id:"remera-06",
        nombre: "remera 06",
        imagen:"../img/remera 18.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    },
    {
      
        id:"remera-07",
        nombre: "remera 07",
        imagen:"../img/remera 19.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    },
    {
        
        id:"remera-08",
        nombre: "remera 08",
        imagen:"../img/remera 20.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    },
    {
        
        id:"remera-09",
        nombre: "remera 09",
        imagen:"../img/remera 21.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    }, 
     {
        
        id:"remera-10",
        nombre: "remera 10",
        imagen:"../img/remera 22.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    },
    {
        
        id:"remera-11",
        nombre: "remera 11",
        imagen:"../img/remera 23.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    },
    {
        
        id:"remera-12",
        nombre: "remera 12",
        imagen:"../img/remera 24.jpg",
        categoria: {
            nombre: "remeras",
            id: "remeras"
        },
        precio:"$ 1500"

    },
   ];

const contenedorproductos = document.querySelector ("#contenedor-productos");

   function cargarproductos() {
    productos.forEach (producto => {
        const div = document.createElement ("div");
        div.classList.add ("producto");
        div.innerHTML = `
        
        
        
        <img class=" remera_uno " src="${producto.imagen}" alt="${producto.nombre} ">
    
        <div class="texto_uno">

       <h3 class="precio_uno">${producto.precio}</h3>

        </div> <button class="carrito" id="${producto.id}">agregar a carrito </button> </div>
        
        `;

        contenedorproductos.append(div);
    })
   }

cargarproductos();

