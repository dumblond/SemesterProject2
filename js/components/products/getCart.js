import displayMessage from "../common/displayMessage.js";
import { getExistingCart } from "../utils/cartFunctions.js";
import { EMPTY_FILTER_RESULTS } from "../../settings/emptyFilter.js";
import { baseUrl } from "../../settings/api.js";

export default function (data) {
  const element = document.querySelector(".cart-container");
  const cart = getExistingCart();
  element.innerHTML = ``;

  if (data.length === 0) {
    displayMessage("warning", EMPTY_FILTER_RESULTS, ".cart-container");
  }

  console.log(data);

  data.forEach((products) => {
    let cssClass = "far";

    const doesCartExist = cart.find((cart) => {
      return parseInt(cart.id) === products.id;
    });

    if (doesCartExist) {
      cssClass = "fas";
    }
    element.innerHTML += `
        <div class="col">
            <div class="card mb-3">
                <div class="card-body products">
                <a href="product_details.html?id=${products.id}"</a>
                    <i class="${cssClass} fa-star mb-3" 
                    data-id="${products.id}" 
                    data-title="${products.title}"
                    data-image="${products.image.formats.small.url}"
                    data-price="${products.price}"></i>  
                    <img class="card-img-top"  src="${
                      baseUrl + products.image.formats.small.url
                    }">
                    <h5 class="card-title mb-3">${products.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Price: ${
                      products.price
                    }</h6>
                    
                    </div>
            </div>
        </div>`;
  });

  const cartButtons = document.querySelectorAll(".products i");

  cartButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick() {
    this.classList.toggle("fas");
    this.classList.toggle("far");

    console.log(this.dataset);
    const id = this.dataset.id;
    const title = this.dataset.title;
    const image = this.dataset.image;
    const price = this.dataset.price;

    const currentCart = getExistingCart();

    const cartExist = currentCart.find((cart) => {
      return cart.id === id;
    });

    if (!cartExist) {
      const storage = {
        id: id,
        title: title,
        image: image,
        price: price,
      };
      currentCart.push(storage);
      saveCart(currentCart);
    } else {
      const nexCart = currentCart.filter((cart) => cart.id !== id);
      saveCart(nexCart);
    }
  }

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
