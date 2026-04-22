const Product1 = {
    name: "iPhone 16Promax",
    category: "Telephone",
    price: 600000,
    quantity: 6,
    minStocklevel: 10,
    discountRate: 0.15
};
console.log(`Product: ${Product1.name} (${Product1.category})`);
console.log(`Price: ${Product1.price} | Quantity: ${Product1.quantity} units`);
//Total stock value
let totalStockValue = Product1.price * Product1.quantity;
console.log(`Total Stock Value: ${totalStockValue} RWF`);
//Discount per unit
let discountPerUnit = Product1.price * Product1.discountRate;
console.log(`Discount per unit: ${discountPerUnit} RWF`);
//Price after discount
let priceAfterDiscount = Product1.price - discountPerUnit;
console.log(`Price after discount: ${priceAfterDiscount} RWF`);
// conditions of  the stock
if (Product1.quantity === 0) {
    console.log(`${Product1.name}: OUT OF STOCK — Reorder immediately.`);
} else if (Product1.quantity < Product1.minStockLevel) {
    console.log(`${Product1.name}: LOW STOCK — ${Product1.quantity} units remaining.`);
} else if (Product1.quantity <= 50) {
    console.log(`${Product1.name}: Healthy stock — ${Product1.quantity} units.`);
} else {
    console.log(`${Product1.name}: Well stocked — ${Product1.quantity} units.`);
}
//another product
const Product2 = {
    name: "Acer 7Gen",
    category: "Computer",
    price: 500000,
    quantity: 4,
    minStocklevel: 10,
    discountRate: 0.15
}
//labelling the product
console.log(`Product: ${Product2.name} (${Product2.category})`);
console.log(`Price: ${Product2.price} RWF | Quantity: ${Product2.quantity}`);
//product2 value
let totalValue2 = Product2.price * Product2.quantity;
console.log(`Total value: ${totalValue2} RWF`);
let discount2 = Product2.price * Product2.discountRate;
console.log(`Discount: ${discount2}`);
let discountedPrice2 = Product2.price - discount2;
console.log(`Discounted price: ${discountedPrice2} RWF`);
//stock status
if (Product2.quantity === 0) {
    console.log(`${Product2.name}: OUT OF STOCK — Reorder immediately.`);
} else if (Product2.quantity < Product2.minStockLevel) {
    console.log(`${Product2.name}: LOW STOCK — ${Product2.quantity} units remaining.`);
} else if (Product2.quantity <= 50) {
    console.log(`${Product2.name}: Healthy stock — ${Product2.quantity} units.`);
} else {
    console.log(`${Product2.name}: Well stocked — ${Product2.quantity} units.`);
}
//Comparing two products
let difference = Product1.price - Product2.price;
if(Product1.price > Product2.price){
  console.log(`Budget pick: ${Product2.name}. ${Product2.name} is ${difference} RWF cheaper than ${Product1.name}`);
}else if(Product1.price < Product2.price){
    console.log(`Budget pick: ${Product1.name}.${Product1.name} is ${difference} RWF cheaper than ${Product2.name}`);
}else{
    console.log(`Both Products are the same price`);
}
//combined aalerts
if (Product1.quantity === 0 || Product2.quantity === 0) {
    console.log("URGENT: One or more products are OUT OF STOCK!");
}
//Both low stock
if (
    Product1.quantity < Product1.minStockLevel &&
    Product2.quantity < Product2.minStockLevel) {
    console.log("RESTOCK ALERT: Both products are running low!");
}else if (
    (Product1.price > 1500 && Product1.quantity < Product1.minStockLevel) ||
    (Product2.price > 1500 && Product2.quantity < Product2.minStockLevel)) {
    console.log("PRIORITY REORDER: High-value item at risk!");
}else if (
    Product1.quantity !== 0 && Product2.quantity !== 0 && Product1.quantity >= Product1.minStockLevel && Product2.quantity >= Product2.minStockLevel
) {
    console.log("Inventory status: all products OK.");
};
//inventory report
console.log("\n================ INVENTORY REPORT ================\n");

// 1. Total products
const totalProducts = 2;
console.log(`Total Products: ${totalProducts}`);

const combinedValue = totalStockValue + totalValue2;

console.log(`Combined Inventory Value: ${combinedValue} RWF`);

//most expensive product

let mostExpensiveName;
let mostExpensivePrice;

if (Product1.price > Product2.price) {
    mostExpensiveName = Product1.name;
    mostExpensivePrice = Product1.price;
} else if (Product2.price > Product1.price) {
    mostExpensiveName = Product2.name;
    mostExpensivePrice = Product2.price;
} else {
    mostExpensiveName = "Both products";
    mostExpensivePrice = Product1.price;
}

console.log(`Most Expensive: ${mostExpensiveName} (${mostExpensivePrice} RWF)`);

//low-stock count
let lowStockCount = 0;

if (Product1.quantity < Product1.minStockLevel) {
    lowStockCount++;
}

if (Product2.quantity < Product2.minStockLevel) {
    lowStockCount++;
}

console.log(`Low Stock Items: ${lowStockCount}`);

console.log("Insight: Consider restocking low items and promoting the higher-priced product for better profit.");

console.log("\n==================================================\n");