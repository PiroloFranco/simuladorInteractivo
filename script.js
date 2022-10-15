let producto1;
let producto2;
let producto3;
let Mecaderia = parseFloat(prompt("Elija un producto"))
 
if(Mercaderia >= 1000) { 
    console.log(cafetera);
} else if(Mercaderia >= 500) {
    console.log("Esto es medianamente barato, lo compro")
} else if(Mercaderia >= 200) {
    console.log("Esto si que es barato, lo compro!")
}else {
    console.log("No encontre ningun Mercaderia bueno, mejor no voy a comprar nada")
}

let miArray = [producto1, producto2, producto3];
let i = 10;
do {
  miArray.push(i);
  i++;
} while(i <= 10);
let products = [producto1, producto2, producto3];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product)
    total = total + price;
    document.getElementById("checkout").innerHTML = 'Pagar $${total}'
}
function pay(){
    console.log(product, price);
    window.alert(products.join(", \n"));
}
