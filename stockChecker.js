const productName = "Apple";
const category = "Fruit";
let price = 500;
let inStock = true;
let quantity = 80;
if(quantity === 0){
    console.log(`CRITICAL:Out of stock! Reorder immediately`);
}else if(quantity < 10){
    console.log(`WARNING: Low stock. Consider Reordering`);
}else if(quantity <= 50){
    console.log(`OK: Healthy stock Level.`);
}else{
    console.log(`FULL: Warehouse well stocked`);
}