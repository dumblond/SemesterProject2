import displayMessage from "../common/displayMessage.js";
import { EMPTY_FILTER_RESULTS } from "../../settings/emptyFilter.js";
import { baseUrl } from "../../settings/api.js";

export default function (data) {
  const element = document.querySelector(".products-container");
  element.innerHTML = ``;

  if (data.length === 0) {
    displayMessage("warning", EMPTY_FILTER_RESULTS, ".products-container");
  }

  data.forEach((products) => {
    element.innerHTML += `
        <div class="col">
            <div class="card mb-3">
                <div class="card-body products">
                  <a href="product_details.html?id=${products.id}"</a>
                  <img class="card-img-top"  src="${
                    baseUrl + products.image.formats.small.url
                  }" alt="${products.image.alternativeText}">
                  <h5 class="card-title mt-4">${products.title}</h5>
                  <h6 class="card-subtitle mt-4 mb-4">Price: ${
                    products.price
                  }</h6>
                </div>
            </div>
        </div>`;
  });
}
