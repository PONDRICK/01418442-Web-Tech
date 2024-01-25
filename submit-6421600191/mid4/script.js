const items = [
  { name: "Apple", category: "Fruit", price: 1 },
  { name: "Carrot", category: "Vegetable", price: 0.5 },
  { name: "Banana", category: "Fruit", price: 0.8 },
  { name: "Cucumber", category: "Vegetable", price: 1.2 },
  { name: "Orange", category: "Fruit", price: 0.9 },
  { name: "Tomato", category: "Vegetable", price: 0.7 },
  { name: "Lettuce", category: "Vegetable", price: 0.3 },
  { name: "Grapes", category: "Fruit", price: 2 },
  { name: "Mushroom", category: "Vegetable", price: 1.5 },
  { name: "Strawberry", category: "Fruit", price: 1.8 },
  { name: "Blueberry", category: "Fruit", price: 2.5 },
  { name: "Potato", category: "Vegetable", price: 0.4 },
  { name: "Broccoli", category: "Vegetable", price: 1.1 },
  { name: "Mango", category: "Fruit", price: 1.7 },
  { name: "Spinach", category: "Vegetable", price: 0.6 },
  { name: "Cherry", category: "Fruit", price: 2.2 },
  { name: "Peas", category: "Vegetable", price: 0.9 },
  { name: "Peach", category: "Fruit", price: 1.3 },
  { name: "Pineapple", category: "Fruit", price: 1.5 },
  { name: "Celery", category: "Vegetable", price: 0.8 },
];

const itemNames = items.map(item => item.name);
document.getElementById('result1').textContent = itemNames.join(' , ');

const fruits = items.filter(item => item.category === "Fruit");
document.getElementById('result2').textContent = fruits.map(fruit => fruit.name).join(", ");

const total = items.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
document.getElementById('result3').textContent = `$${total.toFixed(2)}`;

const sortedItems = items.slice().sort((a, b) => a.price - b.price);
document.getElementById('result4').textContent = sortedItems.map(item => item.name).join(", ");

const cucumberDetails = items.find(item => item.name === "Cucumber");
if (cucumberDetails) {
  document.getElementById('result5').textContent = `{ Name: ${cucumberDetails.name}, Category: ${cucumberDetails.category}, Price: $${cucumberDetails.price.toFixed(2)} }`;
} 

const totalFruitPrice = fruits.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
document.getElementById('result6').textContent = ` $${totalFruitPrice.toFixed(2)}`;

const cheapestFruit = fruits.reduce((minPriceItem, currentItem) => (currentItem.price < minPriceItem.price ? currentItem : minPriceItem), fruits[0]);
document.getElementById('result7').textContent = ` ${cheapestFruit.name} : $${cheapestFruit.price.toFixed(2)}  `;


const sortedFruits = fruits.slice().sort((a, b) => a.name.localeCompare(b.name));
const fruitsInfo = sortedFruits.map(fruit => ` ${fruit.name}: $${fruit.price.toFixed(2)} `).join(" , ");
document.getElementById('result8').textContent = fruitsInfo;

const vegetables = items.filter(item => item.category === "Vegetable");
const totalVegetablePrice = vegetables.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
const averageVegetablePrice = totalVegetablePrice / vegetables.length;
document.getElementById('result9').textContent = ` $${averageVegetablePrice.toFixed(2)}`;

const expensiveVegetables = items.filter(item => item.category === "Vegetable" && item.price > 1);
const sortedExpensiveVegetables = expensiveVegetables.slice().sort((a, b) => b.price - a.price);
const vegetablesInfo = sortedExpensiveVegetables.map(vegetable => `${vegetable.name}: $${vegetable.price.toFixed(2)}`).join(", ");
document.getElementById('result10').textContent = vegetablesInfo;