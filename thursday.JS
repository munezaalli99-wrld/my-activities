const products2 = [
  { name: "Rice", category: "Food", price: 800, quantity: 20, minStockLevel: 10 },
  { name: "Soy Sauce", category: "Condiments", price: 2500, quantity: 4, minStockLevel: 10 },
  { name: "Inyange Water", category: "Beverages", price: 300, quantity: 0, minStockLevel: 5 },
  { name: "Fanta Orange", category: "Beverages", price: 600, quantity: 70, minStockLevel: 20 },
  { name: "Bread", category: "Food", price: 1000, quantity: 20, minStockLevel: 15 }
];

function getTotalValue(product) {
  return product.price * product.quantity;
}

function getDiscountedPrice(product) {
  return product.price * 0.85;
}

function getStatus(product) {
  if (product.quantity === 0) return "OUT OF STOCK";
  else if (product.quantity < product.minStockLevel) return "LOW STOCK";
  else if (product.quantity <= 50) return "Healthy";
  else return "Well stocked";
}

// Q6
products2.forEach(function(product) {
  console.log(`${product.name} (${product.category}) — ${product.price} RWF (discounted: ${getDiscountedPrice(product)} RWF) — ${product.quantity} units — ${getStatus(product)}`);
});

// Q7
let totalInventory = 0;
let lowStock = 0;

products2.forEach(function(product) {
  totalInventory += getTotalValue(product);
  if (product.quantity < product.minStockLevel) {
    lowStock++;
  }
});

console.log(`Total inventory value: ${totalInventory} RWF`);
console.log(`Products needing restock: ${lowStock}`);

// Q8
let mostExpensive = products2[0];
let cheapest = products2[0];

products2.forEach(function(product) {
  if (product.price > mostExpensive.price) {
    mostExpensive = product;
  }

  if (product.price < cheapest.price) {
    cheapest = product;
  }
});

console.log(`Most expensive: ${mostExpensive.name}`);
console.log(`Cheapest: ${cheapest.name}`);

// Q9
function getLowStockProducts(products) {
  const result = [];

  products.forEach(function(product) {
    if (product.quantity < product.minStockLevel) {
      result.push(product);
    }
  });

  return result;
}

const lowStockProducts = getLowStockProducts(products2);

lowStockProducts.forEach(function(product) {
  console.log(`${product.name} — ${product.quantity} units remaining`);
});

// Q10
function getByCategory(products, category) {
  const result = [];

  products.forEach(function(product) {
    if (product.category === category) {
      result.push(product);
    }
  });

  return result;
}

const beverages = getByCategory(products2, "Beverages");

beverages.forEach(function(product) {
  console.log(product.name);
});

// Q11
console.log("=".repeat(37));
console.log("KIGALI SHOP INVENTORY REPORT");
console.log("=".repeat(37));

products2.forEach(function(product) {
  console.log(`${product.name} — ${getStatus(product)} — ${getTotalValue(product)} RWF`);
});

console.log("─".repeat(37));
console.log(`Total products: ${products2.length}`);
console.log(`Total inventory value: ${totalInventory} RWF`);
console.log(`Products needing restock: ${lowStock}`);
console.log(`Most expensive: ${mostExpensive.name}`);
console.log(`Cheapest: ${cheapest.name}`);
console.log("=".repeat(37));