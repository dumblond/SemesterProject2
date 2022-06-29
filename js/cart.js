import { getExistingCart } from "./components/utils/cartFunctions.js";
import deleteButton from "./components/buttons/deleteButton.js";
import displayMessage from "./components/common/displayMessage.js";
import { EMPTY_FILTER_RESULTS } from "./settings/emptyFilter.js";

const cart = getExistingCart();

const cartContainer = document.querySelector(".cart-container");

if (cart.length === 0) {
  displayMessage("warning", EMPTY_FILTER_RESULTS, ".cart-container");
}

deleteButton(cart.length);

cart.forEach((product) => {
  cartContainer.innerHTML += `
  <div class="col">
      <div class="card mb-3">
          <div class="card-body products">
              
              </div>
      </div>
  </div>`;
});
