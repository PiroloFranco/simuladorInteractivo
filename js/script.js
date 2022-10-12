let precio = parseFloat(prompt("Ingrese un numero"))

if(precio >= 1000) { 
    console.log("Esto es caro, mejor no lo compro")
} else if(precio >= 500) {
    console.log("Esto es medianamente barato, lo compro")
} else if(precio >= 200) {
    console.log("Esto si que es barato, lo compro!")
}else {
    console.log("No encontre ningun precio bueno, mejor no voy a comprar nada")
}

let products = [];
let total = 0;


function add(product, price) {
    console.log(product, price);
    products.push(product)
    total = total + price;
}

function pay(){
    console.log(product, price);
    window.alert("su producto se agrego al carro con exito.")
}