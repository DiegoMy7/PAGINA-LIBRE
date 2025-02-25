let carrito = [];
let total = 0;

function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");
    const contadorCarrito = document.getElementById("carrito-contador");
    
    listaCarrito.innerHTML = "";
    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });
    
    totalElemento.textContent = total;
    contadorCarrito.textContent = carrito.length;
}

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("lista-carrito")) {
        actualizarCarrito();
    }
});
function verCategoria(categoria) {
    window.location.href = `categorias.html?categoria=${categoria}`;
}
