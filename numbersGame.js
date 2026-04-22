const productName = "Apple";
const category = "Fruit";
let price = 500;
let inStock = true;
let quantity =  10;
//if the price is above 1000 RWF
console.log(price > 1000 ? "YES":"NO");
//is the quantity exactly 20
console.log(quantity === 20);
//not equal to 0
console.log(quantity != 0);
//remainder after splitting into 3 shops
console.log("Remainder after splitting 3 ways: " + (quantity % 3));
const tax = 0.1;
let withTax = price + (price * tax);
console.log(`Price including 10% tax : ${withTax} RWF`);