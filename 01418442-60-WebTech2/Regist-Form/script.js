document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value;
    const gender = form.elements["gender"].value;
    const interest = Array.from(form.elements["interest"])
      .filter((el) => el.checked)
      .map((el) => el.value)
      .join(", ");
    const country = form.elements["country"].value;

    resultDiv.innerHTML = `<p>Name : ${name}</p><p>Gender : ${gender}</p><p>Interest : ${interest}</p><p>Country : ${country}</p>`;
  });
});
