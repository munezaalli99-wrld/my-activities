const productName = "Apple";
const category = "Fruit";
let price = 500;
let inStock = true;
let quantity =  10;
//product label
console.log(`${productName} (${category}) - ${price} per unit`);
//stock sentence
console.log(`${quantity} units in stock.inStock:${inStock}`);
//total value
let totalValue = price * quantity;
console.log(`Total value:${totalValue}RWF`);