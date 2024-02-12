"use strict";

const countries = document.querySelector(".countries");

const getCountry = function (country) {
	console.log(country);
	const req = new XMLHttpRequest();
	req.open("GET", `https://restcountries.com/v3.1/name/${country}`);

	const html = `
    <article class="country">
        <img src="jp.png" alt="" class="country_img" />
        <div class="country_data">
            <h3 class="country_name">Japan</h3>
            <h4 class="country_region">Asia</h4>
        </div>
    </article>`;
	countries.insertAdjacentHTML("beforeend", html);
};
getCountry("japan");
// const emptySpace = document.querySelector(".space");

// const html = `<h2>New Message:</h2><p>this is a message from script</p>`;

// emptySpace.insertAdjacentHTML("beforeend", html);