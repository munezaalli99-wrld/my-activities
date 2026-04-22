const product = {
    name: "New Balance",
    category: "Shoes",
    price: 35000,
    quantity: 20,
    inStock: true
}
console.log(product.name);
console.log(product.category); 
console.log(product.price);
console.log(product.quantity);
console.log(product.inStock); 
console.log(product.name + "" + product.category + "-" + product.price + "RWF." + product.quantity + "units in stock.");
let promo = product.price * 0.8;
console.log("Promotion price: " + promo);
