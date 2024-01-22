const container = document.getElementById("container");
const img = document.createElement("img");

img.src = "popo.png";
img.alt = "Nopparat";

container.appendChild(img);

const fruit = ["Apple", "Banana", "Mango", "Strawberry", "Orange"];

const fruitList = document.getElementById("friutList");

fruit.forEach((friut) => {
  const li = document.createElement("li");
  li.textContent = friut;
  fruitList.append(li);
});
