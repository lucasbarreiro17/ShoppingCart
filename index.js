const url = "https://fakestoreapi.com/products";
const contenedorProducto = document.getElementById("contenedorProducto");
const contenedorCarrito = document.getElementById("contenedorCarrito");
let arrayProducts = [];


function getJSONdata(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            arrayProducts = data;
            mostrar(arrayProducts);
        })
        .catch(error => {
            console.error('Hubo un error:', error);
        });
}


document.addEventListener("DOMContentLoaded", () => {
    getJSONdata(url);
    mostrar(arrayProducts);
});


function showCart(id,stock){
    let producto=arrayProducts[id-1];
    contenedorCarrito.innerHTML += `
            
            <li class="list-group-item d-flex bg-dark text-white " >
                <div class="row">
            
                <img class="col-2" src="${producto.image}">
               
                <div class="me-auto col-8">
                    <div class="fw-bold">${producto.title}</div>
                    <span>${estrellas(producto.rating.rate)}</span>
                    
                    <div class="text-secondary">${producto.description}</div>
                    <div class="text-secondary" id="stock-${producto.id}">${stock}</div>
                    
                
               
                </div>
                </div>
            </li>
            
        `;
}



function mostrar(data) {
    contenedorProducto.innerHTML = "";
    for (const producto of data) {

        let stock = Math.floor(Math.random() * (20 - 1)) + 1;
       
        contenedorProducto.innerHTML += `
            
            <li class="list-group-item d-flex bg-dark text-white " onclick="showCart(${producto.id},${stock})" >
                <div class="row">
            
                <img class="col-2" src="${producto.image}">
               
                <div class="me-auto col-8">
                    <div class="fw-bold">${producto.title}</div>
                    <span>${estrellas(producto.rating.rate)}</span>
                    
                    <div class="text-secondary">${producto.description}</div>
                    <div class="text-secondary" id="stock-${producto.id}">${stock}</div>
                    
                
               
                </div>
                </div>
            </li>
            
        `;



    }
}



function estrellas(rating) {
    let ratingFixed = Math.round(rating);
    const stars = '<i class="fa fa-star checked text-warning"></i>'.repeat(ratingFixed)
    const starsEmpty = '<i class="fa fa-star"></i>'.repeat(5 - ratingFixed)
    return stars + starsEmpty;
}


/* Authors:
        Sofía Rodríguez, Nicolás Esteban, Santiago Font, Matias Mendez, Gonzalo Vera, Lucas Barreiro*/