import { getExistingCart } from "./components/utils/cartFunctions.js";
import deleteButton from "./components/buttons/deleteButton.js";
import displayMessage from "./components/common/displayMessage.js";
import { EMPTY_FILTER_RESULTS } from "./settings/emptyFilter.js";

const cart = getExistingCart();

const cartContainer = document.querySelector(".products-container");

if (cart.length === 0) {
  displayMessage("warning", EMPTY_FILTER_RESULTS, ".products-container");
}

deleteButton(cart.length);

cart.forEach((data) => {
  cartContainer.innerHTML += `
  
  <div class="card mb-3">
  
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${data.image}"class="img-fluid rounded-start" alt="${data.alt}">
      </div>
      <div class="col-md-4">
        <div class="card-body">
          <a href="product_details.html?id=${data.id}" class="card-title mb-4">
          <h5>${data.title}</h5></a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-body">
          <p class="card-text">Price: ${data.price}</p>
        </div>
      </div>
    </div>
  </div>`;
});
