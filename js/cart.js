import {
  getCartCount,
  getExistingCart,
  saveCart,
} from "./components/utils/cartFunctions.js";
import deleteAllCartButton from "./components/buttons/deleteAllButtonCart.js";
import displayMessage from "./components/common/displayMessage.js";
import { EMPTY_FILTER_RESULTS } from "./settings/emptyFilter.js";
import createMenu from "./components/common/createMenu.js";
import createFooter from "./components/common/createFooter.js";

const cart = getExistingCart();

const cartContainer = document.querySelector(".products-container");

const totalPriceContainer = document.querySelector(".totalprice-container");

createMenu();
createFooter();
showCart();

deleteAllCartButton(cart.length);

export function showCart() {
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    displayMessage("warning", EMPTY_FILTER_RESULTS, ".products-container");
  }

  cart.forEach((data, index) => {
    cartContainer.innerHTML += `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-3">
          <img src="${data.image}" class="img-fluid rounded-start cart-img" alt="${data.alt}">
        </div>
        <div class="col-4">
          <div class="card-body">
            <a href="product_details.html?id=${data.id}" class="card-title mb-4">
            <h5>${data.title}</h5></a>
            <p>Size: ${data.shoeSize}</p>
          </div>
        </div>
        <div class="col-2">
          <div class="card-body">
            <i class="fa-solid fa-trash trash-can" data-id="${index}"></i>
          </div>
        </div>
        <div class="col-3">
          <div class="card-body">
            <p class="card-text">Price: ${data.price}</p>
          </div>
        </div>
      </div>  
    </div>
  `;
  });

  const trashCan = document.querySelectorAll(".trash-can");

  trashCan.forEach((can) => {
    can.addEventListener("click", function () {
      const cartProductId = can.dataset.id;
      cart.splice(cartProductId, 1);

      getCartCount();
      saveCart(cart);
      showCart();
    });
  });

  const cartPrice = getExistingCart();

  function totalPrice() {
    const sumCart = cartPrice.reduce(
      (previousValue, product) => previousValue + parseFloat(product.price),
      0
    );

    return parseFloat(sumCart).toFixed(2);
  }

  if (cartPrice.length > 0) {
    totalPriceContainer.innerHTML = `
    <div class="card mb-3">
      <p class="m-3 text-end">Total price: ${totalPrice()}</p>
    </div>`;
  } else {
    totalPriceContainer.innerHTML = "";
  }
  createMenu();
}
