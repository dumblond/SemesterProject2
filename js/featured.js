import { getExistingFeatured } from "./components/utils/featuredFunctions.js";
import deleteButton from "./components/buttons/deleteButton.js";
import displayMessage from "./components/common/displayMessage.js";
import { EMPTY_FILTER_RESULTS } from "./settings/emptyFilter.js";
import { baseUrl } from "./settings/api.js";

const featured = getExistingFeatured();

const productsContainer = document.querySelector(".products-container");

if (featured.length === 0) {
  displayMessage("warning", EMPTY_FILTER_RESULTS, ".products-container");
}

deleteButton(featured.length);

featured.forEach((product) => {
  productsContainer.innerHTML += `
  <div class="col">
      <div class="card mb-3">
          <div class="card-body products">
              <i class="fas fa-star mb-3" 
              data-id="${product.id}" 
              data-title="${product.title}"
              data-image="${product.image}"
              data-price="${product.price}"></i>  
              <img class="card-img-top" src="${baseUrl + product.image}">
              <h5 class="card-title mb-3">${product.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Price: ${
                product.price
              }</h6>
              </div>
      </div>
  </div>`;
});
