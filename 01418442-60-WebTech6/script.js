"use strict";

const countries = document.querySelector(".countries");
const countryInput = document.getElementById("countryInput");
const searchBtn = document.getElementById("searchBtn");

const getCountry = function (country) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  req.send();

  req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 300) {
      const [data] = JSON.parse(this.responseText);
      const html = `
        <article class="country">
          <img src="${
            data.flags.png
          }" alt="${country} flag" class="country_img" />
          <div class="country_data">
            <h3 class="country_name">${data.name.common}</h3>
            <h4 class="country_region">${data.region}</h4>
            <p class="country_row"><span>🗣️</span>${Object.values(
              data.languages
            ).join(", ")}</p>
            <p class="country_row"><span>💵</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>`;
      countries.insertAdjacentHTML("beforeend", html);
      countries.style.opacity = 1;
    } else {
      console.error("Failed to fetch country data");
    }
  });
};

// Event listener for the search button
searchBtn.addEventListener("click", function () {
  const countryName = countryInput.value.trim();
  if (countryName !== "") {
    // Clear previous search results
    countries.innerHTML = "";
    getCountry(countryName);
  }
});

// Initial country fetch examples
getCountry("thailand");
getCountry("japan");
getCountry("france");
getCountry("USA");
