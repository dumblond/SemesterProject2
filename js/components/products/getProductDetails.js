import displayMessage from "../common/displayMessage.js";
import { EMPTY_FILTER_RESULTS } from "../../settings/emptyFilter.js";
import { baseUrl } from "../../settings/api.js";
import { getExistingCart, saveCart } from "../utils/cartFunctions.js";

export default function (data) {
  const element = document.querySelector(".productDetail-container");
  element.innerHTML = ``;

  if (data.length === 0) {
    displayMessage("warning", EMPTY_FILTER_RESULTS, ".productDetail-container");
  }

  console.log(data);
  const image = data.image
    ? baseUrl + data.image.formats.small.url
    : data.image_url;
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
      </div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-8">
            <img src="${image}" class="img-fluid rounded-start" alt="${
    data.image ? data.image.alternativeText : ""
  }">
          </div>
          <div class="col-md-4">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">Price: ${data.price}</p>
              <p class="card-text">${data.description}</p>
                <form class="row g-3">
                    <label for="shoe-size" class="form-label"></label>
                    <select class="form-select" id="shoe-size" required>
                      <option selected disabled value="">Select size</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                    </select>
                    <button 
                      class="btn btn-primary" 
                      id="cart-button" 
                      data-id="${data.id}"
                      data-title="${data.title}"
                      data-price="${data.price}"
                      data-image="${image}"
                    >Put in cart</button>  
                </form>
            </div>
          </div>
        </div>
      </div>`;

  const cartButton = document.querySelector("#cart-button");
  const shoeSize = document.querySelector("#shoe-size");

  cartButton.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(event);

    const currentCart = getExistingCart();

    const inCart = currentCart.find((cart) => {
      return cart.id === event.target.dataset.id;
    });

    if (shoeSize.value === "") {
      return alert("Select a size!");
    }
    event.target.dataset.shoeSize = shoeSize.value;
    console.log(shoeSize.value);

    currentCart.push(event.target.dataset);
    saveCart(currentCart);

    location.href = "cart.html";
  });
}
