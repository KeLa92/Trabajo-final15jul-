// ------------------ COPYRIGHT ------------------
let ano = new Date().getFullYear();
document.getElementById('copyright-ano').innerHTML = ano;

// ------------------ CARRITO ------------------
let abrirCarrito = document.querySelector('.shopping');
let cerrarCarrito = document.querySelector('.cerrarCarrito');
let lista = document.querySelector('.lista');
let carritoLista = document.querySelector('.carritoLista');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let cantidad = document.querySelector('.cantidad');

abrirCarrito.addEventListener('click', () => {
	body.classList.add('activo');
});
cerrarCarrito.addEventListener('click', () => {
	body.classList.remove('activo');
});

let productos = [
	{
		id: 1,
		nombre: 'Producto nombre 1',
		imagen: '1.jpg',
		precio: 1200,
	},
	{
		id: 2,
		nombre: 'Producto nombre 2',
		imagen: '2.jpg',
		precio: 1200,
	},
	{
		id: 3,
		nombre: 'Producto nombre 3',
		imagen: '3.jpg',
		precio: 2200,
	},
	{
		id: 4,
		nombre: 'Producto nombre 4',
		imagen: '4.jpg',
		precio: 1230,
	},
	{
		id: 5,
		nombre: 'Producto nombre 5',
		imagen: '5.jpg',
		precio: 3200,
	},
	{
		id: 6,
		nombre: 'Producto nombre 6',
		imagen: '6.jpg',
		precio: 12000,
	},
];

function initApp() {
	productos.forEach((value, key) => {
		let newDiv = document.createElement('div');
		newDiv.classList.add('item');
		newDiv.innerHTML = `
            <img class="rounded-1" src="static/img/products/${value.imagen}">
            <div class="nombre">${value.nombre}</div>
            <div class="precio">$${value.precio.toLocaleString()}</div>
            <button class="boton" onclick="anadirAlCarrito(${key})"><span>Añadir al carrito</span></button>`;
		lista.appendChild(newDiv);
	});
}
initApp();

let carritoListaItem = [];
function anadirAlCarrito(key) {
	if (carritoListaItem[key] == null) {
		// copiar producto de lista a carritoLista
		carritoListaItem[key] = JSON.parse(JSON.stringify(productos[key]));
		carritoListaItem[key].cantidad = 1;
	}
	reloadCard();
}

function reloadCard() {
	carritoLista.innerHTML = '';
	let count = 0;
	let precioTotal = 0;
	carritoListaItem.forEach((value, key) => {
		precioTotal = precioTotal + value.precio;
		count = count + value.cantidad;
		if (value != null) {
			let newDiv = document.createElement('li');
			newDiv.innerHTML = `
                <div><img src="static/img/products/${value.imagen}"/></div>
                <div>${value.nombre}</div>
                <div>$${value.precio.toLocaleString()}</div>
                <div>
                    <button onclick="cambiarCantidad(${key}, ${value.cantidad - 1})"><i class="fas fa-minus-circle color"></i></button>
                    <div class="count">${value.cantidad}</div>
                    <button onclick="cambiarCantidad(${key}, ${value.cantidad + 1})"><i class="fas fa-plus-circle color"></i></button>
					<button onclick="cambiarCantidad(${key}, ${value.cantidad - 1000000})"><i class="fas fa-trash-alt color"></i></button>
                </div>`;
			carritoLista.appendChild(newDiv);
		}
	});
	total.innerText = '$' + precioTotal.toLocaleString();
	cantidad.innerText = count;
}

function cambiarCantidad(key, cantidad) {
	if (cantidad <= 0) {
		delete carritoListaItem[key];
	} else {
		carritoListaItem[key].cantidad = cantidad;
		carritoListaItem[key].precio = cantidad * productos[key].precio;
	}
	reloadCard();
}
