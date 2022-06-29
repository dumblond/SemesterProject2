import displayMessage from "../common/displayMessage.js";
import { EMPTY_FILTER_RESULTS } from "../../settings/emptyFilter.js";
import { baseUrl } from "../../settings/api.js";
import { getExistingCart } from "../utils/cartFunctions.js";

export default function (data) {
  const element = document.querySelector(".productDetail-container");
  element.innerHTML = ``;

  if (data.length === 0) {
    displayMessage("warning", EMPTY_FILTER_RESULTS, ".productDetail-container");
  }

  console.log(data);

  element.innerHTML += `
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="products.html">Products</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                ${data.title}
              </li>
            </ol>
          </nav>
      
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-8">
            <img src="${
              baseUrl + data.image.formats.large.url
            }" class="img-fluid rounded-start" alt="${
    data.image.alternativeText
  }">
          </div>
          <div class="col-md-4">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">Price: ${data.price}</p>
              <p class="card-text">${data.description}</p>

              <form class="row g-3">
                <label for="validationDefault" class="form-label"></label>
                <select class="form-select" id="validationDefault" required>
                    <option selected disabled value="">Select size</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                </select>
                <button 
                  class="btn btn-primary" 
                  id="cart-button" 
                  type="button"
                  data-id="${data.id}"
                  data-title="${data.title}"
                  data-price="${data.price}"
                  >Put in cart</button>  
              </form>
            </div>
          </div>
        </div>
      </div>

            
    </div>`;

  const cartButton = document.querySelector("#cart-button");

  cartButton.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(event);

    const currentCart = getExistingCart();

    const inCart = currentCart.find((cart) => {
      return cart.id === event.target.dataset.id;
    });

    if (!inCart) {
      currentCart.push(event.target.dataset);
      saveCart(currentCart);
    }
  });

  function saveCart(items) {
    localStorage.setItem("cart", JSON.stringify(items));
  }
}
