document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const myTable = document.getElementById("myTable");

  const button = document.createElement("button");

  button.textContent = "Click me!";
  button.id = "myButton";
  container.appendChild(button);

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const myRow = myTable.insertRow();
    const cell1 = myRow.insertCell(0);
    const cell2 = myRow.insertCell(1);

    // cell1.textContent = "Ponsakorn";
    // cell2.textContent = "20";
  });
});
